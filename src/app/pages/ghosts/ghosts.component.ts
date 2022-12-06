import { Component, OnInit } from '@angular/core';
import ghostsData from "../../data/ghosts.json";
import { Ghost } from './../../models/ghost';

@Component({
  selector: 'app-ghosts',
  templateUrl: './ghosts.component.html',
  styleUrls: ['./ghosts.component.scss']
})
export class GhostsComponent implements OnInit {

  public ghosts: Ghost[] = ghostsData;

  constructor() { }

  ngOnInit(): void {
  }

}
