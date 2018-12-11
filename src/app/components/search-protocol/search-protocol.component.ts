import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../services/main.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-protocol',
  templateUrl: './search-protocol.component.html',
  styleUrls: ['./search-protocol.component.scss']
})
export class SearchProtocolComponent implements OnInit {
  public term: string;
  public term2: string;
  public searchRes = [];
  public pathHome = false;

  constructor(
    private _mainService: MainService,
    private router: Router,
    private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      console.log(params);
      if (params['term']) {
        this.onSearch(params['term']);
      }
    });
  }

  doSearch() {
    this.router.navigate([{ term: this.term + this.term2 }]);
  }

  onSearch(term: string) {
    this._mainService.searchTest(this.term, this.term2).subscribe((res: any) => {
      this.searchRes = res.results;
      console.log(this.searchRes);
      this.pathHome = true;
    });
  }

  ngOnInit() {
  }

}
