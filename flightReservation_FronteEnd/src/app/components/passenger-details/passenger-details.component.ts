import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit{

  public flightData: any;
  reservation: Reservation = new Reservation('','','','','','','','','');

  constructor(private service: ReservationService,
    private router: Router,
    private route: ActivatedRoute
  ){

  }

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    const id = idString ? parseInt(idString, 10) : 0;
    this.service.getFlight(id)
        .subscribe((res: any) => {
            this.flightData = res;
        });
  }

  public onSubmit(){
    this.reservation.flightId = this.flightData.id
    this.service.saveReservation(this.reservation).subscribe((res: any) => {
      this.router.navigate(['/confirm',this.reservation.flightId])
    })
  }
  

}
