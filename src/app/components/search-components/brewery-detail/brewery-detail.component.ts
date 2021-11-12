import {Component, OnInit} from '@angular/core';
import {ApplicationState, Brewery} from "../../../store/models/model";
import {select, Store} from "@ngrx/store";
import {CARD_STATE} from "../brewery-list/brewery-list.constants";
import {setSelectedBrewery, setView} from "../../../store/actions/actions";
import {selectSelectedBrewery} from "../../../store/selectors/selectors";
import {Observable} from "rxjs";


@Component({
  selector: 'app-brewery-detail',
  templateUrl: './brewery-detail.component.html',
  styleUrls: ['./brewery-detail.component.css']
})
export class BreweryDetailComponent implements OnInit {
  brewery$: Observable<Brewery | null> = this.store.pipe(select(selectSelectedBrewery));

  constructor(private store: Store<ApplicationState>) {
  }

  ngOnInit(): void {

  }

  close(): void {
    this.store.dispatch(setView({view: CARD_STATE.SEARCH_HISTORY}));
    this.store.dispatch(setSelectedBrewery({selectedBrewery: null}));
  }
}
