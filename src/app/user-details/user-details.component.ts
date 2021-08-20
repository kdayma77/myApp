import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  searchValue = [];
  filterData = false;
  details = {};
  candidate_data=[ {
    "id": 11,
    "name": "Ash",
    "department": "Finance",
    "joining_date": "8/10/2020"
},
{"id": 12,"name": "John","department": "HR","joining_date": "18/1/2011"},
{ "id": 13, "name": "Zuri", "department": "Operations", "joining_date": "28/11/2019"},
{"id": 14,  "name": "Vish",  "department": "Development",   "joining_date": "7/7/2017"},
{ "id": 15, "name": "Barry",  "department": "Operations", "joining_date": "19/8/2014"},
{"id": 16,"name": "Ady",  "department": "Finance",  "joining_date": "5/10/2014"}, 
{ "id": 17,"name": "Gare","department": "Development",  "joining_date": "6/4/2014"},
{ "id": 18,  "name": "Hola",  "department": "Development",  "joining_date": "8/12/2010"}, 
{"id": 19,  "name": "Ola",  "department": "HR",  "joining_date": "7/5/2011"},
{ "id": 20,  "name": "Kim",  "department": "Finance",  "joining_date": "20/10/2010"}]

  constructor() { }
  ngOnInit(): void {  
  }

  Delete(index) {
    const userId = this.candidate_data[index].id;
    this.candidate_data = this.candidate_data.filter(item => item.id !== userId);
  }
  // logic for search but it not used as primeng have default support for search
  searchUser(user) {
    this.candidate_data.forEach(item => {
      if(user['name'] === item['name']) {
         this.searchValue.push(item);
      }
    });
    // we can use searchvalue to show search result
  }
  // logic for sort but it not used as primeng have default support for sort
  sortUser?(data) {
    data.sort(function (a, b) {
      let ajoindate = a['joining_date'].split('/');
      let bjoindate = b['joining_date'].split('/');
      return a.name.localeCompare(b.name) || parseInt(bjoindate[2]) - parseInt(ajoindate[2]);
  })
  }
  filterCandidateData() {
    this.filterData = true;
    let currentYear = new Date();
    this.candidate_data.forEach(item => {
      let yearCheck = item['joining_date'].split('/');
      if(currentYear.getFullYear() - parseInt(yearCheck[2]) > 2) {
         this.searchValue.push(item);
      }
    });
  }

  listCandidateData() {
    this.filterData = false;
    if(this.candidate_data.length !== 10) {
      this.candidate_data = [ {
        "id": 11,
        "name": "Ash",
        "department": "Finance",
        "joining_date": "8/10/2020"
    },
    {"id": 12,"name": "John","department": "HR","joining_date": "18/1/2011"},
    { "id": 13, "name": "Zuri", "department": "Operations", "joining_date": "28/11/2019"},
    {"id": 14,  "name": "Vish",  "department": "Development",   "joining_date": "7/7/2017"},
    { "id": 15, "name": "Barry",  "department": "Operations", "joining_date": "19/8/2014"},
    {"id": 16,"name": "Ady",  "department": "Finance",  "joining_date": "5/10/2014"}, 
    { "id": 17,"name": "Gare","department": "Development",  "joining_date": "6/4/2014"},
    { "id": 18,  "name": "Hola",  "department": "Development",  "joining_date": "8/12/2010"}, 
    {"id": 19,  "name": "Ola",  "department": "HR",  "joining_date": "7/5/2011"},
    { "id": 20,  "name": "Kim",  "department": "Finance",  "joining_date": "20/10/2010"}]
    }
  }
  
  deleteCandidateFromDepartment(deptName) {
    const departmentName = deptName;
    this.candidate_data = this.candidate_data.filter(item => item.department !== departmentName);
  }

  filterDeptWithCount() {
    this.candidate_data.forEach(item => {
      this.details[item.department] = 1 + (this.details[item.department] || 0)
    })
    this.details = JSON.stringify(this.details);
    alert(this.details);
  }
  
}
