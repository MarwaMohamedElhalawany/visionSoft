export const baseUrl:string = "https://shippingapi.vision-soft.org/api/" ;

export enum  auth {
    login= 'Login/userlogin',
    getUserData= '/get-user-data',
    forgetPassword= '/forget-password',
  }
 export enum   users {
    
      usersList= 'users',
      crateUser= 'Auth/CreateAsync',
      updateUser= 'Auth/UpdateAsync',
      deleteUser= 'Auth/delete',
      resetPassword= 'Auth/reset-password',
      getBranches= "branches",
      getPositions= "positions",
      getDepartments= "departments",
      getJobTitles= "jobTitles",
      getAccountById= 'getAccount',
      getUserRoles= 'userRoles',
      getUserPermissions= 'userPermissions',
      addPermissions= "addPermissions",

      getRolesManagement= "roles_management"
    }

    export enum  settings {
      
      getBranches= 'Branch/getBranchs',
      getBranchesById= 'Branch/getBranchById',
      saveBranch= 'Branch/saveBranch',
      deleteBranch= 'Branch/deleteBranch',

      getDepartments= 'Department/getDepartments',
      getDepartmentsById= 'Department/getDepartmentById',
      saveDepartments= 'Department/saveDepartment',
      deleteDepartments= 'Department/deleteDepartment',

      getJobTitle= 'JobTitle/getJobTitles',
      getJobTitleById= 'JobTitle/getJobTitleById',
      saveJobTitle= 'JobTitle/saveJobTitle',
      deleteJobTitle= 'JobTitle/deleteJobTitle',

      getPositions= 'Position/getPositions',
      getPositionById= 'Position/getPositionById',
      savePosition= 'Position/savePosition',
      deletePosition= 'Position/deletePosition',

    }
    export enum  Cities {
      getCities= 'Cities/display',
      addCities='Cities/insert',
      editCities='Cities/update',
      deleteCities="Cities/delete"

  }
  export enum Branches{
    getBranches='Branchs/display',
  }
