import { Component, OnInit } from '@angular/core';
import ghostsData from "../../data/ghosts.json";
import { Evidences } from './../../models/evidences';
import { Ghost } from './../../models/ghost';

@Component({
  selector: 'app-cheatsheet',
  templateUrl: './cheatsheet.component.html',
  styleUrls: ['./cheatsheet.component.scss']
})
export class CheatsheetComponent implements OnInit {


  public evidences: Evidences = {
    dots: undefined,
    box: undefined,
    emf: undefined,
    prints: undefined,
    freez: undefined,
    orbs: undefined,
    pen: undefined
  }

  public ghosts: Ghost[] = ghostsData;
  public ghostsCopy: Ghost[] = ghostsData;

  constructor() { }

  ngOnInit(): void {
  }

  getEvidStatus(obj: any) {
    if (obj === undefined) {
      return ""
    }
    if (obj === true) {
      return "--active"
    }
    if (obj === false) {
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

    //orbs
    if (this.evidences.orbs === true) {
      this.ghostsCopy = this.ghostsCopy.filter(ghost => {
        //| 6 | 7 | 10 | 12 | 13 | 16 | 18 | 19 | 20
        if (ghost.id === 4 || ghost.id === 6 || ghost.id === 7 || ghost.id === 10
          || ghost.id === 12 || ghost.id === 13 || ghost.id === 16 || ghost.id === 18 || ghost.id === 19 || ghost.id === 20) {
          return true
        } else { return false }
      })
    }
    if (this.evidences.orbs === false) {
      this.ghostsCopy = this.ghostsCopy.filter(ghost => {
        //| 6 | 7 | 10 | 12 | 13 | 16 | 18 | 19 | 20
        if (!(ghost.id === 4 || ghost.id === 6 || ghost.id === 7 || ghost.id === 10
          || ghost.id === 12 || ghost.id === 13 || ghost.id === 16 || ghost.id === 18 || ghost.id === 19)) {
          return true
        } else { return false }
      })
    }

    //pen
    if (this.evidences.pen === true) {
      this.ghostsCopy = this.ghostsCopy.filter(ghost => {
        if (ghost.id === 0 || ghost.id === 3 || ghost.id === 6 || ghost.id === 7
          || ghost.id === 8 || ghost.id === 9 || ghost.id === 15) {
          return true
        } else { return false }
      })
    }
    if (this.evidences.pen === false) {
      this.ghostsCopy = this.ghostsCopy.filter(ghost => {
        if (!(ghost.id === 0 || ghost.id === 3 || ghost.id === 6 || ghost.id === 7
          || ghost.id === 8 || ghost.id === 9 || ghost.id === 15)) {
          return true
        } else { return false }
      })
    }

    //box
    if (this.evidences.box === true) {
      this.ghostsCopy = this.ghostsCopy.filter(ghost => {
        if (ghost.id === 0 || ghost.id === 1 || ghost.id === 2 || ghost.id === 3 || ghost.id === 6
          || ghost.id === 10 || ghost.id === 12 || ghost.id === 16 || ghost.id === 17 || ghost.id === 18) {
          return true
        } else { return false }
      })
    }
    if (this.evidences.box === false) {
      this.ghostsCopy = this.ghostsCopy.filter(ghost => {
        if (!(ghost.id === 0 || ghost.id === 1 || ghost.id === 2 || ghost.id === 3 || ghost.id === 6
          || ghost.id === 10 || ghost.id === 12 || ghost.id === 16 || ghost.id === 17 || ghost.id === 18)) {
          return true
        } else { return false }
      })
    }

    //cold
    if (this.evidences.freez === true) {
      this.ghostsCopy = this.ghostsCopy.filter(ghost => {
        if (ghost.id === 5 || ghost.id === 7 || ghost.id === 8 || ghost.id === 9 || ghost.id === 10
          || ghost.id === 11 || ghost.id === 13 || ghost.id === 16 || ghost.id === 17 || ghost.id === 20) {
          return true
        } else { return false }
      })
    }
    if (this.evidences.freez === false) {
      this.ghostsCopy = this.ghostsCopy.filter(ghost => {
        if (!(ghost.id === 5 || ghost.id === 7 || ghost.id === 8 || ghost.id === 9 || ghost.id === 10
          || ghost.id === 11 || ghost.id === 13 || ghost.id === 16 || ghost.id === 17 || ghost.id === 20)) {
          return true
        } else { return false }
      })
    }

    //finger 
    if (this.evidences.prints === true) {
      this.ghostsCopy = this.ghostsCopy.filter(ghost => {
        if (ghost.id === 2 || ghost.id === 3 || ghost.id === 4 || ghost.id === 5 || ghost.id === 9
          || ghost.id === 13 || ghost.id === 14 || ghost.id === 15 || ghost.id === 19 || ghost.id === 20) {
          return true
        } else { return false }
      })
    }
    if (this.evidences.prints === false) {
      this.ghostsCopy = this.ghostsCopy.filter(ghost => {
        if (!(ghost.id === 2 || ghost.id === 3 || ghost.id === 4 || ghost.id === 5 || ghost.id === 9
          || ghost.id === 13 || ghost.id === 14 || ghost.id === 15 || ghost.id === 19 || ghost.id === 20)) {
          return true
        } else { return false }
      })
    }

    //dots
    if (this.evidences.dots === true) {
      this.ghostsCopy = this.ghostsCopy.filter(ghost => {
        if (ghost.id === 1 || ghost.id === 2 || ghost.id === 4 || ghost.id === 10 || ghost.id === 11
          || ghost.id === 12 || ghost.id === 14 || ghost.id === 18) {
          return true
        } else { return false }
      })
    }
    if (this.evidences.dots === false) {
      this.ghostsCopy = this.ghostsCopy.filter(ghost => {
        if (!(ghost.id === 1 || ghost.id === 2 || ghost.id === 4 || ghost.id === 10 || ghost.id === 11
          || ghost.id === 12 || ghost.id === 14 || ghost.id === 18)) {
          return true
        } else { return false }
      })
    }

    //emf
    if (this.evidences.emf === true) {
      this.ghostsCopy = this.ghostsCopy.filter(ghost => {
        if (ghost.id === 0 || ghost.id === 1 || ghost.id === 5 || ghost.id === 8 || ghost.id === 11
          || ghost.id === 14 || ghost.id === 15 || ghost.id === 17 || ghost.id === 18 || ghost.id === 19) {
          return true
        } else { return false }
      })
    }
    if (this.evidences.emf === false) {
      this.ghostsCopy = this.ghostsCopy.filter(ghost => {
        if (!(ghost.id === 0 || ghost.id === 1 || ghost.id === 5 || ghost.id === 8 || ghost.id === 11
          || ghost.id === 14 || ghost.id === 15 || ghost.id === 17 || ghost.id === 18 || ghost.id === 19)) {
          return true
        } else { return false }
      })
    }
  }

}
