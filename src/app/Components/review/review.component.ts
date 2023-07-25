import { Component } from '@angular/core';
import { REVIEW_JSON_URL } from 'src/app/Helpers/urls';
import { JsonFileReaderService } from 'src/app/Services/json-file-reader.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {

  fileURL = REVIEW_JSON_URL;
  result : any;
  MaxStars = 5;
  constructor(private jsonReader:JsonFileReaderService){

  }

  ngOnInit(){
   this.readJson();
  }

  readJson(){
    this.jsonReader.getJSON(this.fileURL).subscribe(value =>{
      value.reviews.map((e: any) =>{
        e.filledStarsArr  = [];
        e.emptyStarsArr = [];
        e.filledStarsArr.length = e.stars;
        e.emptyStarsArr.length = this.MaxStars - e.stars;
      });
      this.result = value.reviews;
    });
  }
}
