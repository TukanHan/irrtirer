import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule }from '@angular/platform-browser/animations';
import { ProjectConfigComponent } from './project-config.component';
import { provideMockStore } from '@ngrx/store/testing';
import { MosaicProject } from '../../../core/models/mosaic-project.model';

describe('ProjectConfigComponent', () => {
  let component: ProjectConfigComponent;
  let fixture: ComponentFixture<ProjectConfigComponent>;
  const project: MosaicProject = {
    config: {
      mosaicWidth: 1,
      base64Image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAC0SURBVFhH7dDbCsUwCETR/P9P5zAF4VB6UUdNCm7oYycrGXPzGsjWQLYGsjVQ2xjj+M4tBwrsCoeWAp9g0hKgBiaVAy04VAq04lA50FoZ0PN6qBToqQToxaFvApnBc9hKAUYh2Z3Hv6mbB13ydcF7SAQOqYDWwzz/3KVasRwYiUPqJQswsjBg9MtJpsU7QBYOmVevIFk45AL+gzJxyLUuyGwccp+wPRBtD6yogWwNZGsg15w/f1I+FJWOEGkAAAAASUVORK5CYII="
    },
    tilesSets: []
  };
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectConfigComponent, BrowserAnimationsModule],
      providers: [provideMockStore({ initialState })]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectConfigComponent);
    component = fixture.componentInstance;
    component.project = project;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
