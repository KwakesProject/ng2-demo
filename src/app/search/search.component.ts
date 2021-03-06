import { Component, OnInit } from '@angular/core';
import { Person, SearchService } from '../shared/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  viewProviders: [SearchService]
})
export class SearchComponent implements OnInit {
query: string;
searchResults: Array<Person>

  constructor(private searchService: SearchService) { }

search(): void {
  this.searchService.getAll().subscribe(
    data => {this.searchResults = data},
    error => console.log(error)
  )
}
  ngOnInit() {
  }

}
