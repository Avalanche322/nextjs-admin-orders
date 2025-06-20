
# Orders Dashboard with Detail View

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

4. **Build and start the production server:**
   ```bash
   npm run build
   npm start
   # or
   yarn build
   yarn start
   ```

## Short Note on Approach and Design Decisions

This Orders Dashboard is built using Next.js with server-side rendering to optimize SEO and performance. The data fetching and filtering happen on the server, ensuring fast and consistent responses. MUI is used for styling and responsive UI components to provide a clean and user-friendly experience. Sorting and filtering are implemented through URL query parameters, enabling direct linking and server-side handling of these operations. The detail view for each order includes product-level data fetched asynchronously from the API and displays a clear, structured breakdown in a table format. Loading and error states are handled with dedicated components to improve UX during data fetches or failures.
