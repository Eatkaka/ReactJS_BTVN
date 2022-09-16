import React from 'react'
export default function TableUser({
  listUser,
  onDelete,
  handleEdit,
  pageNumbers,
  currentPage,
  onChoosePage,
  indexOfFirstNews,
  indexOfLastNews,
  handleNext,
  indexFirstNext,
  indexLastNext,
  handleBack

}) {

  return (
    <>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>

          {listUser.slice(indexOfFirstNews, indexOfLastNews).map((item) => {
            return (

              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.age}</td>
                <td>{item.salary}</td>
                <td><button onClick={() => onDelete(item)} >delete</button></td>


                <td><button onClick={() => handleEdit(item)}>Edit</button></td>
              </tr>
            )

          })}
        </tbody>
      </table>
      <div className="pagination-custom">
        <ul id="page-numbers">
        <li onClick={handleBack}>Back</li>
      
          {
           
           pageNumbers.slice( indexFirstNext, indexLastNext).map((number,index) => {
              
              if (currentPage === number) {
                
                return (
                  <>
                    
                    <li
                      key={index}
                      id={number}
                      onClick={onChoosePage}
                      className="active">
                      {number}
                    </li>
                  </>
                )
              } else {
                return (
                  <>
                    
                    <li
                      key={index}
                      id={number}
                      onClick={onChoosePage}>
                      {number}
                    </li>
                  </>)
              }
            })
          }
         
                <li onClick={handleNext}>Next</li>
        </ul>
      </div>
    </>
  )
}
