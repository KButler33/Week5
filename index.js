class Member {
  constructor (name, membershipType) {
    this.name = name;
    this.membershipType = membershipType;
  }

  describe () {
    return `${this.name} has a ${this.membershipType} membership.`;
  }
}

class GymLocation {
  constructor (name) {
   this.name = name;
   this.members = [ ];
  }

  addMember (member) {
    if (member instanceof Member) {
      this.members.push (member);
    } else {
      throw new Error (`You can only add an instance of Member. Argument is not a member: ${member}.`);
    }
  }

  describe ( ) {
    return `${this.name} has ${thtis.members.length} members.`;
  }
}

class Menu {
  constructor ( ) {
    this.gymLocations = [ ];
    this.selectedGymLocation = null;
  }

  start ( ) {
    let selection = this.showMainMenuOptions ( );
    
    while (selection != 0) {
      switch (selection) {
        case '1':
          this.createGymLocation ( );
          break;
        case '2':
          this.viewGymLocation ( );
          break;
        case '3':
          this.deleteGymLocation ( );
          break;
        case '4':
          this.displayGymLocations ( );
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions ( );
    }

    alert (`Goodbye!`);
  }

  showMainMenuOptions ( ) {
    return prompt (`
    0) exit
    1) create new gym location
    2) view gym location
    3) delete gym location
    4) display all gym locations
    `);
  }

  showGymLocationMenuOptions (gymLocationInfo) {
    return prompt (`
    0) back
    1) create member
    2) delete member
    -------------------------
    ${gymLocationInfo}
    `);
  }

  displayGymLocations ( ) {
    let gymLocationString = ' ' ;
    for (let i = 0; i < this.gymLocations.length; i++) {
      gymLocationString += i + ') ' + this.gymLocations[i].name + '\n';
    }
    alert (gymLocationString);
  }

  createGymLocation ( ) {
    let name = prompt ('Enter name for new gym location: ');
    this.gymLocations.push (new GymLocation(name));
  }

  viewGymLocation ( ) {
    let index = prompt ('Enter the index of the gym location you wish to view:');
    if (index > -1 && index < this.gymLocations.length) {
      this.selectedGymLocation = this.gymLocations [index];
      let description = 'Gym location Name: ' + this.selectedGymLocation.name + '\n';
      
      for (let i = 0; i < this.selectedGymLocation.members.length; i++) {
        description += i + ') ' + this.selectedGymLocation.members[i].name
         + ' - ' + this.selectedGymLocation.members[i].membershipType + '\n'; 
        }

      let selection = this.showGymLocationMenuOptions (description);
      switch (selection) {
        case '1':
          this.createMember ( ) ;
          break;
        case '2': 
          this.deleteMember ( ) ;
      }
    }
  }

  deleteGymLocation ( ) {
    let index = prompt (`Enter the index of the location you wish to delete:`);
    if (index > -1 && index < this.gymLocations.length) {
      this.gymLocations.splice(index, 1);
    }
  }

  createMember ( ) {
    let name = prompt (`Enter name for new member:`);
    let membershipType = prompt (`Enter membership type for new member:`);
    this.selectedGymLocation.members.push (new Member (name, membershipType));
  }

  deleteMember ( ) {
    let index = prompt (`Enter the index of the member you wish to delete:`);
    if (index > -1 && index < this.selectedGymLocation.members.length) {
      this.selectedGymLocation.members.splice(index, 1);
    }
  }
}

let menu = new Menu ( );
menu.start ( );
