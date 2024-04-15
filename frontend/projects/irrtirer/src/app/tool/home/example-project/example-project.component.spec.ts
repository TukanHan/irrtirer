import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleProjectComponent } from './example-project.component';
import { ExampleProject } from './example-project.interface';

describe('ExampleProjectComponent', () => {
  let component: ExampleProjectComponent;
  let fixture: ComponentFixture<ExampleProjectComponent>;
  const project: ExampleProject = {
    name: "Example",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAC0SURBVFhH7dDbCsUwCETR/P9P5zAF4VB6UUdNCm7oYycrGXPzGsjWQLYGsjVQ2xjj+M4tBwrsCoeWAp9g0hKgBiaVAy04VAq04lA50FoZ0PN6qBToqQToxaFvApnBc9hKAUYh2Z3Hv6mbB13ydcF7SAQOqYDWwzz/3KVasRwYiUPqJQswsjBg9MtJpsU7QBYOmVevIFk45AL+gzJxyLUuyGwccp+wPRBtD6yogWwNZGsg15w/f1I+FJWOEGkAAAAASUVORK5CYII="
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExampleProjectComponent);
    component = fixture.componentInstance;
    component.project = project;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
