// import Counter from './Counter';
import './App.css';
// import InputComponent from './InputComponent';
import TableUser from './TableUser';
import userData from './data.json'
import React, { useState } from 'react'
import ListHandle from './ListHandle';


function App() {

  const [listUser, setListUser] = useState(userData)

  const [isAdded, setIsAdded] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [salary, setSalary] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [newId, setNewId] = useState('')
  const [isEdit, setIsEdit] = useState('')

  const onSearch = (value) => {
    const result = [...userData].filter(
      item => item.first_name.toLowerCase() === value.toLowerCase()
    )
    setListUser(preState => preState = result)
  }
  const newUser = [
    {
      first_name: " ",
      last_name: " ",
      gender: " ",
      age: " ",
      email: " ",
      salary: " "
    }
  ]
  const handleSearch = (value) => {
    setListUser(userData)

  }
  const onDelete = (item) => {
    console.log(item.id)
    const resultSearch = [...listUser].filter(
      (x) => x.id !== item.id
    )
    setListUser(preState => preState = resultSearch)
  }
  const addUser = (item) => {
    console.log(item)
    setListUser([...listUser], newUser)
    alert('đã thêm thành công')
  }
  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const handleAge = (e) => {
    setAge(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleLastName = (e) => {
    setLastName(e.target.value)
  }
  const handleGender = (e) => {
    setGender(e.target.value)
  }
  const handleSalary = (e) => {
    setSalary(e.target.value)
  }
  const handleId = (e) => {
    setNewId(e.target.value)
  }
  const handleClick = () => {
    setIsAdded(!isAdded)
    const listUserCopy = [...listUser]
    listUserCopy.push({
      id: newId,
      first_name: firstName,
      last_name: lastName,
      email: email,
      gender: gender,
      age: age,
      salary: salary

    })
    setListUser(listUserCopy)
    setAge('');
    setEmail('');
    setFirstName(''); setNewId('');
    setSalary(''); setLastName('');
    setGender('')
    alert('thêm thành công')
  }
  const handleEdit = (item) => {
    setNewId(item.id)
    setAge(item.age)
    setFirstName(item.first_name)
    setLastName(item.last_name)
    setEmail(item.email)
    setGender(item.gender)
    setSalary(item.salary)
    setIsEdit(item.id)
  }
  const handleUpdate = () => {
    let listUserCopy = [...listUser]
    let index = listUser.findIndex(s => s.id === isEdit);
    listUserCopy[index] = {
    id: newId,
    first_name: firstName,
    last_name: lastName,
    email: email,
    gender: gender,
    age: age,
    salary: salary
    }
    setListUser(listUserCopy)
    setAge('');
    setEmail('');
    setFirstName(''); setNewId('');
    setSalary(''); setLastName('');
    setGender('')
    setIsEdit('')
    alert('cập nhật thành công')
  }
  const handleSortName = (e) => {
    let listUserCopy = [...listUser]
    let value = e.target.value
    if (value === "1") {
      let resultSortName = listUserCopy.sort(function (a, b) {
        if (a.first_name.toLocaleLowerCase() < b.first_name.toLocaleLowerCase()) {
          return -1
        } else {
          return 1
        }
      });
      setListUser(resultSortName)
    }
    if (value === "2") {
      let resultSortName = listUserCopy.sort(function (a, b) {
        if (a.first_name.toLocaleLowerCase() < b.first_name.toLocaleLowerCase()) {
          return 1
        } else {
          return -1
        }
      });
      setListUser(resultSortName)
    }
  }

  const handleSortSalary = (e) => {
    let listUserCopy = [...listUser]
    let value = e.target.value
    if (value === '1') {
      let resultSortSalaty = listUserCopy.sort(function (a, b) {
        return a.salary - b.salary;
      });
      setListUser(resultSortSalaty)
    }
    if (value === '2') {
      let resultSortSalaty = listUserCopy.sort(function (a, b) {
        return b.salary - a.salary;
      });
      setListUser(resultSortSalaty)
    }
  }
  const onChoosePage = (e) => {
    setCurrentPage(e.target.id)
  }
  const handleNext = () =>{
   setIndexCurrentNext(indexCurrentNext+1)
  }
  const handleBack = () =>{
    setIndexCurrentNext(indexCurrentNext-1)
   }
  const [indexCurrentNext,setIndexCurrentNext]=useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  //  newPerPage trang hiện tại là 10
  console.log('cp' + currentPage)
  const indexOfLastNews = currentPage * 10;
  console.log('indxlast' + indexOfLastNews)
  const indexOfFirstNews = indexOfLastNews - 10;
  console.log('indxfirst' + indexOfFirstNews)
  const indexLastNext= indexCurrentNext * 5 ;
  const indexFirstNext = indexLastNext - 5;
 
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(userData.length / 10); i++) {
    pageNumbers.push(i);
  }


  return (
    <div className="App">
      <ListHandle
        isEdit={isEdit}
        handleUpdate={handleUpdate}
        age={age} firstName={firstName} lastName={lastName}
        salary={salary} gender={gender} email={email}
        handleFirstName={handleFirstName}
        handleAge={handleAge}
        handleEmail={handleEmail}
        handleSalary={handleSalary}
        handleLastName={handleLastName}
        handleGender={handleGender}
        isAdded={isAdded}
        setIsAdded={setIsAdded}
        onSearch={onSearch}
        handleSearch={handleSearch}
        addUser={addUser}
        listUser={listUser}
        handleClick={handleClick}
        newId={newId}
        handleId={handleId}
        handleSortName={handleSortName}
        handleSortSalary={handleSortSalary} />

      {/* <Counter/>
       <InputComponent/> */}
      <TableUser
        listUser={listUser}
        onDelete={onDelete}
        handleEdit={handleEdit}
        indexFirstNext={indexFirstNext}
        indexLastNext={indexLastNext}
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        onChoosePage={onChoosePage}
        indexOfFirstNews={indexOfFirstNews}
        indexOfLastNews={indexOfLastNews}
        handleNext={handleNext}
        handleBack={handleBack}
      />


    </div>
  );
}

export default App;
