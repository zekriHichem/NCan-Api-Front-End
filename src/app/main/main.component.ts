import { Component, OnInit } from '@angular/core';
import {NumericService} from '../numeric.service';
import {MammographyService} from '../mammography.service';
import {ResponseN} from '../ResponseN.model';
import {Case} from '../Case.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ResultM} from '../ResultM.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  case: Case = new Case();
  resultnum: ResponseN;
  resultmam: ResultM;
  form: FormGroup;
  reslutClass = '';
  reslutDiag = '';
  classP = {
    CALC : 'Calcification',
    CIRC : 'circumscribed masses',
    SPIC : 'Spiculated masses',
    MISC : 'Other, ill-defined masses',
    ARCH : 'Architectural distortion',
    ASYM : 'Asymmetry',
    NORM : 'Normal',
  };

  constructor(private numericService: NumericService, private mammographyService: MammographyService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      binary: ['', Validators.required]
    });
  }
  predictNum(dataNum) {
    const elem: HTMLElement = document.getElementById('b') as HTMLElement;
    const elem1: HTMLElement = document.getElementById('m') as HTMLElement;
    const elem3: HTMLElement = document.getElementById('cn') as HTMLElement;
    this.case = dataNum;
    this.numericService.getPrediction(this.case).subscribe(
      data => {
        this.resultnum = data;
        console.log(this.resultnum.diagnostic);
        if (this.resultnum.diagnostic === 'B') {
           elem.click();
           elem3.click();
        } else {
          elem1.click();
          elem3.click();
        }
      }
    );
  }
  onFileSelected(event) {
    console.log(event);
    const file =  event.target.files.item(0);
    this.form.get('binary').setValue(file);

  }

  predictMammography() {
    const formData = new FormData();
    console.log(this.form.get('binary').value);
    formData.append('image', this.form.get('binary').value);
    const elem: HTMLElement = document.getElementById('b1') as HTMLElement;
    const elem1: HTMLElement = document.getElementById('m1') as HTMLElement;
    const elem3: HTMLElement = document.getElementById('cn1') as HTMLElement;
    const i = 0;
    this.mammographyService.getPrediction(formData).subscribe(
      data => {
        this.resultmam = data.body;
        console.log(data);
        if (data.body != null) {
          this.reslutClass = this.classP[this.resultmam.classe];
          this.reslutDiag = this.resultmam.diag;
          if (this.reslutDiag === 'M') {
            elem1.click();
            elem3.click();
          } else {
            elem.click();
            elem3.click();
          }
        }
      }
    );
      }
}
