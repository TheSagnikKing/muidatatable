# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

// show/hide column feature
1. All useStates starting with show is for hidding and showing the columns. intially true.
2. setShow of those useStates are functions which is responsible for hiding and showing the column. 

// sorting feature
1. i have created a copy of the actual data because of sorting. 
2. intially i have no columnName so i am getting the intial data.
3. the togglesort function is responsible for setting the columnName and sortOrder.Then the sortData function is running and giving me the sorted data.inside of this function i have asc, desc and initial state logic done.

// Pagination Feature
1. dataPerPageState , this contain the intial value of the table . Means it show how many rows will be shown per page intially.
2. totalPages = if i have 50 data and each page showing me 10 . then total page will be 5.
3. currentPage means the page i am seeing right now that page value. 

//  Filtering Feature
1. From the calender i am getting the startDate and EndDate . and from all those checkbox that calender has below.
2. On the basis of that checkbox that is true , i am filtering the data from the entire dataset and then i am displaying it .
3. For the Lotno i have created a separete function called applyFilter . this is for the lotnumber filtering only.

// Reset, Csv Download.
1. in the reset i am setting all the values to its intial state.
2. for csv see the code. it is basicaly downloading the data.
3. in the currentPage one there i am downloading the data that i am seeing right now and its value is base on the rows i have selected. and on the second one i am downloading the entire dataset coming from the api.

These are the main Logic of this code summary. There are many other small logics present . See the code for those logic
