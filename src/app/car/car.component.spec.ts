import { CarComponent } from './car.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CarService} from '../car.service';

describe('CarComponent' , ()=>{

  let fixture: ComponentFixture<CarComponent>;
  let component: CarComponent;

  beforeEach( ()=>{
     TestBed.configureTestingModule({
          declarations : [CarComponent]
      })
       fixture = TestBed.createComponent(CarComponent);
       component = fixture.debugElement.componentInstance;

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
    const carService = fixture.debugElement.injector.get(CarService)
    fixture.detectChanges();
    expect(component.isCarVisible).toEqual(carService.getVisibility());
  })

  it('should display car if is visible', ()=>{

    const carService = fixture.debugElement.injector.get(CarService)
    carService.showCar()
    fixture.detectChanges();
    
    const native = fixture.debugElement.nativeElement;
    const text = native.querySelector('span').textContent
    
    expect(text).toEqual('Car is visible')
 
  })


  it('shouldn"t display car if isn"t visible', ()=>{

    const carService = fixture.debugElement.injector.get(CarService)
    carService.hideCar()
    fixture.detectChanges();
    
    const native = fixture.debugElement.nativeElement;
    const text = native.querySelector('span').textContent
    
    expect(text).not.toEqual('Car is visible')
 
  })
})