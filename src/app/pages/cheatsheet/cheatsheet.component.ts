import { Component, OnInit } from '@angular/core';
import evidenceData from "../../data/evidences.json";
import ghostsData from "../../data/ghosts.json";
import { Evidence } from '../../models/evidence';
import { Ghost } from './../../models/ghost';

@Component({
  selector: 'app-cheatsheet',
  templateUrl: './cheatsheet.component.html',
  styleUrls: ['./cheatsheet.component.scss']
})
export class CheatsheetComponent implements OnInit {


  public evdences: Evidence[] = evidenceData;

  public ghosts: Ghost[] = ghostsData;
  public ghostsCopy: Ghost[] = ghostsData;

  public speed?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getEvidStatus(obj: Evidence) {
    if (obj.status === null) {
      return ""
    }
    if (obj.status === true) {
      return "--active"
    }
    if (obj.status === false) {
      return "--disabled"
    }
    return
  }


  changeEvidStatus(obj: any) {
    if (obj === undefined) {
      obj = true;
    }
    if (obj === true) {
      obj = undefined;
    }
  }

  filterGhosts() {
    this.ghostsCopy = this.ghosts;

    let evidArrTrue: number[] = [];
    let evidArrFalse: number[] = [];

    this.evdences.forEach(el => {
      if (el.status === true) {
        evidArrTrue.push(el.id);
      }
      if (el.status === false) {
        evidArrFalse.push(el.id);
      }
    })

    evidArrTrue.forEach(el => {
      this.ghostsCopy = this.ghostsCopy.filter(ghost => {
        if (ghost.evidence.includes(el)) {
          return true
        } else {
          return false
        }
      })
    })
    evidArrFalse.forEach(el => {
      this.ghostsCopy = this.ghostsCopy.filter(ghost => {
        if (ghost.evidence.includes(el)) {
          return false
        } else {
          return true
        }
      })
    })

    if (this.speed !== undefined) {
      this.ghostsCopy = this.ghostsCopy.filter(ghost => {
        if (ghost.speed === this.speed || ghost.speed === null) {
          return true
        } else {
          return false
        }
      })
    }
  }

  clearFilter() {
    this.evdences.forEach(el => {
      el.status = null;
    })
    this.speed = undefined;
    this.filterGhosts();
  }

}
