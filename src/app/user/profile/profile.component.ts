import { Component, OnInit } from '@angular/core';
import { ProductCatelogService } from '../../shared/product-catelog.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadComponent } from '../../shared/image-upload/image-upload.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  merchantData: any;
  storeId: number;
  errorMessage :any = "";
  constructor(private _productCatelogService:ProductCatelogService,
    private modalService : NgbModal) { }
  ngOnInit() {    
    this.storeId = +JSON.parse(localStorage.getItem('merchant'))['store_id'];
    this._productCatelogService.fetchStoreInfoById(this.storeId).subscribe((data) => {
      this.merchantData = data['store'][0];
      console.log(this.merchantData);
    })
  }

  uploadImage(store_id:any)
  {
    const modalRef = this.modalService.open(ImageUploadComponent);
    modalRef.componentInstance['title']= 'Image Upload';
    modalRef.componentInstance['id']= store_id;
    modalRef.componentInstance['image_type']= 'merchants';
    modalRef.componentInstance['productImage'].subscribe((data)=>{
      console.log(data);
      console.log(this.merchantData);
      this.merchantData['image_url'] = data['image_url'];
      // this.merchantData.filter((cat) => cat['store_id'] == data['store_id'])['image_url'] = data['image_url'];
      // console.log(this.storeCategories);
    })
  }

}
