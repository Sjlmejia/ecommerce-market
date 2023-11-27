import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required:true }) duration: number = 0;
  @Input({ required:true }) message: string = '';
  counter = signal(0);
  // counterRef: number | undefined | ReturnType<typeof setTimeout>;

  constructor() {
    //no Async
    this.duration = 12;
    console.log('constructor')
    console.log('-'.repeat(10))
  }
  
  ngOnChanges( changes: SimpleChanges) {
    //before and during render
    console.log('ngonchanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if( duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // after render
    // una vez
    // async, then, subs
    console.log('NgOnINit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    // this.counterRef = setInterval(() => {
    //   console.log('run interval')
    //   this.counter.update(statePrev => statePrev + 1)
    // }, 1000)
  }

  ngAfterViewInit() {
    // after render
    // hijos ya fueron renderizados
    console.log('ngAfterViewinit')
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    //cuando el componente se destruye
    console.log('se destruyo')
    // clearInterval(this.counterRef)
  }

  doSomething() {
    console.log('change duration')
  }
}
