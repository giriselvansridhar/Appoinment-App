import { Component } from '@angular/core';
import { Appointment } from '../models/appointment'; 


// Need to import first

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {


  newAppointmentTitle:string="";
  newAppointmentDate:Date=new Date();
  







  appointments: Appointment[]=[]






  






  

}
