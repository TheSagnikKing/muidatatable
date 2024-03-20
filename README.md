# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


colSpan(4) means column or header width

{
        name: "Location",
        options: {
          filter: false,
          sortThirdClickReset: true,
          customHeadRender: (columnMeta, updateDirection) => (
            <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer',color:"red" }}>
              {columnMeta.name}
            </th>
          )
        }
      }, for sorting use the updateDirection(2)


My cquestion is on a single row all the years value should be same right . is one 2023 then all the  other fields should be 2023 not 2024 or 2025.