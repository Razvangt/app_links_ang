import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LinksServiceService } from 'src/app/shared/components/links-service.service';
import { FormBuilder, FormControl,  Validators } from '@angular/forms';
import { Link ,ResponseLink} from 'src/app/shared/models/linkModel';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {
  values = '';
  constructor(private linksService: LinksServiceService, private formBuilder: FormBuilder,) { 
  }

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
  
  }
  public fillName() {
    const site = this.checkoutForm.value.site;
    if(site != null ){
        this.values = site.replace(/.+\/\/|www.|\..+/g, '');
        console.log("value",site);
    }
  }
  onSubmit() {
   const name = this.checkoutForm.value.name?.replace(' ','');
   const site = this.checkoutForm.value.site?.replace(' ','');
    if(name != null && site != null){
      this.addLink({
        id : "",
        name : name,
        url : site
      });
    }
    console.warn('Your link has been added', this.checkoutForm.value); 
    this.checkoutForm.reset();
  }
  public addLink(link : Link){
    this.linksService.addLink(link).subscribe(
      (response: ResponseLink) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
