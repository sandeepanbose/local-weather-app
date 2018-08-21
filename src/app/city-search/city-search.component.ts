import { Component, EventEmitter, OnInit, Output } from '@angular/core'
// import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms'
import { FormControl, Validators } from '@angular/forms'
import { debounceTime } from 'rxjs/operators'
@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent implements OnInit {
  public search = new FormControl('', [Validators.minLength(2)])
  constructor() {}
  @Output()
  searchEvent = new EventEmitter<string>()

  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((searchValue: string) => {
      if (!this.search.invalid) {
        console.log(
          'city-search.component.ts before emitting searchEvent searchValue = ' +
            searchValue
        )
        this.searchEvent.emit(searchValue)
      }
    })
  }
}
