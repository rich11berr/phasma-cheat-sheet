import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import ghostsData from "../../data/ghosts.json";
import { Ghost } from './../../models/ghost';

@Component({
  selector: 'app-ghost-item',
  templateUrl: './ghost-item.component.html',
  styleUrls: ['./ghost-item.component.scss']
})
export class GhostItemComponent implements OnInit {

  public ghosts: Ghost[] = ghostsData;
  public ghost?: Ghost

  constructor(
    private route: ActivatedRoute,
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.ghosts.forEach(el => {
      if (el.id === +id!) {
        this.ghost = el;
      }
    })
  }

  ngOnInit(): void {
  }

}
