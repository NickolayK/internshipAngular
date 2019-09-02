import { CarComponent } from './car.component';
import { TestBed, ComponentFixture , async} from '@angular/core/testing';
import { CarService} from '../car.service';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('CarComponent' , ()=>{

  let fixture: ComponentFixture<CarComponent>;
  let component: CarComponent;
  let carService: CarService;

  beforeEach( ()=>{
     TestBed.configureTestingModule({
          declarations : [CarComponent]
      })
       fixture = TestBed.createComponent(CarComponent);
       component = fixture.debugElement.componentInstance;
       carService = fixture.debugElement.injector.get(CarService)
  })



  it('Should create component instqance', ()=>{
    expect(component).toBeTruthy();
  })

  it(`should render h1 tag with text 'My Car Header'`, ()=>{

  
    
    fixture.detectChanges();
    const native = fixture.debugElement.nativeElement;
    const text = native.querySelector('h1').textContent;
    expect(text).toEqual('My Car Header')

  })

  it('should inject CarService', ()=>{
    
    fixture.detectChanges();
    expect(component.isCarVisible).toEqual(carService.getVisibility());
  })

  it('should display car if is visible', ()=>{

    
    carService.showCar()
    fixture.detectChanges();
    
    const native = fixture.debugElement.nativeElement;
    const text = native.querySelector('span').textContent
    
    expect(text).toEqual('Car is visible')
 
  })


  it('shouldn"t display car if isn"t visible', ()=>{

    
    carService.hideCar()
    fixture.detectChanges();
    
    const native = fixture.debugElement.nativeElement;
    const text = native.querySelector('span').textContent
    
    expect(text).not.toEqual('Car is visible')
 
  })

  it(` shouldn't get car name if not async`, ()=>{
    spyOn(carService, 'getCarName')
    .and.returnValue(of('Mazda').pipe(
      delay(2000)
      ));
      fixture.detectChanges();
      expect(component.carName).toBe(undefined)
  })

  it(` shouldn get car name if  async`, async( ()=>{
    spyOn(carService, 'getCarName')
    .and.returnValue(of('Mazda').pipe(
      delay(2000)
      ));
      fixture.detectChanges();
      fixture.whenStable().then( (res)=>{
        expect(component.carName).toEqual('Mazda')
      })
  })
  )
})