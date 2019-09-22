import editTable from './src/editTable';

editTable.install = function (Vue) {
    Vue.component('edit-table', editTable)
};
export default editTable;
