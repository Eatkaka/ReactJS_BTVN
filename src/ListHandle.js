import React from 'react'
export default function ListHandle({ 
  onSearch, 
  handleSearch,
  handleFirstName, 
  handleEmail, handleAge, 
  handleLastName,
  handleGender, newId, 
  handleId, firstName, 
  lastName, age,
  gender, salary, email,
  isEdit, handleUpdate,
  handleSortName,
  handleSortSalary,
  handleSalary,
  handleClick }) {

  return (

    <div className='container '>
      <h1>Chỉnh Sửa Bảng Ở Đây</h1>

      <div className='add-user'>
        <input
          name='id'
          value={newId}
          disabled={isEdit}
          placeholder='Enter id'
          onChange={handleId}
          required="nhập vào"
        />
        <input
          name='firstname'
          value={firstName}
          placeholder='Enter FirstName'
          onChange={handleFirstName}
          required="nhập vào"
        />
        <input
          name="lastname"
          value={lastName}
          placeholder='Enter LastName'
          onChange={handleLastName}
          required="nhập vào"
        />
        <input
          name='email '
          value={email}
          placeholder='Enter Email'
          onChange={handleEmail}
          required="nhập vào"
        />
        <div className='choose'
          value={gender}
          required="chọn đi"
          onChange={handleGender}>
            <input 
              type="radio" 
              value="Male" 
              name="gender" 
            /> Male
            <input 
             type="radio"
             value="Female" 
             name="gender"
              /> Female
        </div>

        <input
          required="nhập vào"
          name='age'
          value={age}
          type='number'
          placeholder='Enter Age'
          onChange={handleAge}
        />
        <input
          required="required"
          name='salary'
          value={salary}
          type='number'
          placeholder='Enter Salary'
          onChange={handleSalary}
        />

      </div>

      {
        isEdit ?
          (<button 
            className='bg-primary add' 
            onClick={handleUpdate}>
              save
          </button>)
          :
          (<button 
            className='bg-primary add' 
            onClick={handleClick}>
            Thêm
          </button>)
      }
      <div className='input-search'>
        <input 
          type="search-input"
          onChange={(e) => onSearch(e.target.value)}
        />

        <button 
          onClick={handleSearch} 
          className='bg-primary'>
          ReSet
        </button>
        <br></br>
        <div className='SortForm'>
          <p>Sort theo tên </p>
          <select onClick={handleSortName}>
            <option>chọn--</option>
            <option value="1">Tên a...b</option>
            <option value="2">Tên b .. a</option>
          </select>
          <p>Sort theo lương :</p>
          <select onChange={handleSortSalary}>
            <option >chọn --</option>
            <option value="1">Lương Tăng Dần</option>
            <option value="2">Lương Giảm Dần</option>

          </select>
        </div>

      </div>


    </div>

  )
}
