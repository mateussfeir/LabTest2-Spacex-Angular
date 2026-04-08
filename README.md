# SpaceX Launch Explorer

SpaceX Launch Explorer is a standalone Angular application built for a lab test. It consumes the public SpaceX API and displays launch missions in a clean card layout with search and status filtering.

## Features Implemented

- Standalone Angular application using the latest Angular style
- `HttpClient` configured with `provideHttpClient()` in `app.config.ts`
- Reactive filter form with `ReactiveFormsModule`
- `FormsModule` included in the filter component imports
- Multiple standalone components
- Search by mission name
- Filter by status: all, successful, failed, upcoming
- TypeScript interface model for SpaceX launches
- Dedicated SpaceX data service
- Angular built-in control flow with `@for`, `@if`, and `@switch`
- Angular signals with `signal()` and `computed()`
- Loading, error, and no-results states
- Newest launches sorted first
- Responsive CSS card layout

## Technologies Used

- Angular 21
- TypeScript
- RxJS
- Angular HttpClient
- Angular Reactive Forms
- CSS
- SpaceX REST API: `https://api.spacexdata.com/v5/launches`

## Project Structure

```text
src/app/
  app.component.ts
  app.component.html
  app.component.css
  app.config.ts

  models/
    launch.model.ts

  services/
    spacex.service.ts

  components/
    launch-filter/
      launch-filter.component.ts
      launch-filter.component.html
      launch-filter.component.css

    launch-list/
      launch-list.component.ts
      launch-list.component.html
      launch-list.component.css
```

## How to Run

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open the app in your browser:

```text
http://localhost:4200/
```

## Build for Production

```bash
npm run build
```

## Screenshot Placeholders

Add screenshots here before submission:

- Home page with launch cards visible
- Search filter in use
- Status filter in use
- No-results state

## Deployment Placeholder

If deployment is required for your course, add the live link here:

```text
Deployment URL: <add-your-deployed-link-here>
```

## Lab Requirement Mapping

- Standalone components: `app.component.ts`, `launch-filter.component.ts`, `launch-list.component.ts`
- HttpClient: `spacex.service.ts` and `app.config.ts`
- FormsModule and ReactiveFormsModule: `launch-filter.component.ts`
- Two or more components: root app, filter component, list component
- Search/filter feature: `launch-filter.component.ts` and `app.component.ts`
- Model/interface/service: `launch.model.ts` and `spacex.service.ts`
- `@for`, `@if`, `@switch`: used in `launch-filter.component.html`, `launch-list.component.html`, and `app.component.html`
- Signals: `app.component.ts`
- Basic CSS styling: component CSS files and `src/styles.css`
