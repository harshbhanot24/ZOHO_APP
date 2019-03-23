import { Component, OnInit, OnChanges } from '@angular/core';
import{ DataService} from '../service/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(public service: DataService) { }
  data = new Map();
  ngOnInit() {
    var c=0;
    this.service.table().subscribe(
      (data) => {
          for (let [key, value] of Object.entries(data)) {
            this.data.set(key, value);
            console.log(c++)
            console.log("here is value",value.contact_id)
          }
        
      },
      ()=>{},
      ()=>console.log(this.data)
    );
    
  }


}
