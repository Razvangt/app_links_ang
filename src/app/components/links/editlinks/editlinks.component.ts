import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LinksServiceService } from 'src/app/shared/components/links-service.service';
import { Link, ResponseLink } from 'src/app/shared/models/linkModel';

@Component({
  selector: 'app-editlinks',
  templateUrl: './editlinks.component.html',
  styleUrls: ['./editlinks.component.css']
})
export class EditlinksComponent implements OnInit {
  nameInp = "";
  siteInp = "";
  id = String;
  private sub :any;
  constructor( 
    private router : ActivatedRoute,
    private navi : Router,
    private linksService: LinksServiceService,
    private formBuilder: FormBuilder,
    ) { }
    checkoutForm = this.formBuilder.group({
      site: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ])
    }); 
  ngOnInit(): void {
    this.router.params.subscribe( params =>{
      this.id = params['id'];
    })
    this.linksService.getLinksById(this.id.toString()).subscribe(
      (response: ResponseLink) => {
        this.nameInp = response.link.name.toString();
        this.siteInp = response.link.url.toString();
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  editLink(link : Link){
    this.linksService.updateLink(link).subscribe(
      (response: ResponseLink) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  onSubmit() {
    const name = this.checkoutForm.value.name?.replace(' ','');
    const site = this.checkoutForm.value.site?.replace(' ','');
     if(name != null && site != null){
       this.editLink({
         id : this.id.toString(),
         name : name,
         url : site
       });
     }
     this.back()
   }
  public back(){
    this.navi.navigate(['/search-link']);
  }
}
