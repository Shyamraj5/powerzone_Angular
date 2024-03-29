import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  signup(email:any,username:any,password:any){

    let data={
      email,
      username,
      password
    }

  return fetch('http://127.0.0.1:8000/owner/user/', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

  }
signin(username:any,password:any){
  let data={
    username,
    password 
  }
  return fetch('http://127.0.0.1:8000/owner/token', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
}


getProduct(){
  return fetch('http://127.0.0.1:8000/owner/cp/', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
    },
  })
}





getcart(){
  
  return fetch('http://127.0.0.1:8000/owner/cart/', {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization':`Token ${localStorage.getItem('token')}`
  },
})

  }


  deletecart(id:any){
    return fetch(`http://127.0.0.1:8000/owner/cart/${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }


comp(complaint:any,place:any,phone:any){

    let data={
      complaint,
      place,
      phone,
    }
  return fetch('http://127.0.0.1:8000/owner/complaints/', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization':`Token ${localStorage.getItem('token')}`
  },
  })


  }

  getcomp(){

    return fetch('http://127.0.0.1:8000/owner/complaints/', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
    },
  })
  
    }
    getallcomp(){

      return fetch('http://127.0.0.1:8000/owner/getallcomp/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
    
      }


    ser(service:any,place:any,phone:any){

      let data={
        service,
        place,
        phone,
      }
    return fetch('http://127.0.0.1:8000/owner/service/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
    },
    })
  
  
    }
  
    getser(){
  
      return fetch('http://127.0.0.1:8000/owner/service/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
    
      }
      getallservice(){
  
        return fetch('http://127.0.0.1:8000/owner/getallser/', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization':`Token ${localStorage.getItem('token')}`
        },
      })
      
        }


      addProduct(data:any){
        return fetch('http://127.0.0.1:8000/owner/cp/', {
          method: 'POST',
          body:data,
          headers: {
            // 'Content-type': 'application/json; charset=UTF-8',
            'Accept':'*/*',
            'Authorization':`Token ${localStorage.getItem('token')}`
          },
        })
      }
      deleteProduct(id:any){
        return fetch(`http://127.0.0.1:8000/owner/cp/${id}/`, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization':`Token ${localStorage.getItem('token')}`
          },
        })
      }
      getSpecificProduct(id:any){
        return fetch(`http://127.0.0.1:8000/owner/cp/${id}/`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization':`Token ${localStorage.getItem('token')}`
          },
        })
      }

      updateProduct(id:any,data:any){
        return fetch(`http://127.0.0.1:8000/owner/cp/${id}/`, {
          method: 'PATCH',
          body:data,
          headers: {
            // 'Content-type': 'application/json; charset=UTF-8',
            'Accept':'*/*',
            'Authorization':`Token ${localStorage.getItem('token')}`
          },
        })
      }



inv(product:any,stock_quantity:any,sold_quantity:any){

        let data={
          product,
          stock_quantity,
          sold_quantity,
        }
      return fetch('http://127.0.0.1:8000/owner/inventories/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Token ${localStorage.getItem('token')}`
      },
      })
    
    
      }



      getstock(){
  
        return fetch('http://127.0.0.1:8000/owner/inventories/', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization':`Token ${localStorage.getItem('token')}`
        },
      })
      
        }



        getSpecinv(id:any){
          return fetch(`http://127.0.0.1:8000/owner/inventories/${id}/`, {
            method: 'GET',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              'Authorization':`Token ${localStorage.getItem('token')}`
            },
          })
        }

        updatestock(id:any,data:any){
          return fetch(`http://127.0.0.1:8000/owner/inventories/${id}/`, {
            method: 'PATCH',
            body:data,
            headers: {
              // 'Content-type': 'application/json; charset=UTF-8',
              'Accept':'*/*',
              'Authorization':`Token ${localStorage.getItem('token')}`
            },
          })
        }

        addtocart(product:any){
          let data={
            
            product
          }
          return fetch(`http://127.0.0.1:8000/owner/cart/`, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              'Authorization':`Token ${localStorage.getItem('token')}`
            },
          })
        }
 

        order(product:any,quantity:any,address:any,phone:any,landmark:any,payment:any){
          let data={
            
            product,
            quantity,
            address,
            phone,
            landmark
           
          }
          return fetch(`http://127.0.0.1:8000/owner/cpurchace/`, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              'Authorization':`Token ${localStorage.getItem('token')}`
            },
          })
        }
        
        cartorder(product:any,quantity:any,address:any,phone:any,landmark:any,payment:any){
          let data={
            
            product,
            quantity,
            address,
            phone,
            landmark
           
          }
          return fetch(`http://127.0.0.1:8000/owner/getorder/`, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              'Authorization':`Token ${localStorage.getItem('token')}`
            },
          })
        }




        getorders(){
  
          return fetch('http://127.0.0.1:8000/owner/getorder/', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization':`Token ${localStorage.getItem('token')}`
            
          },
        })
        
          }      
          deleteorder(id:any){
            return fetch(`http://127.0.0.1:8000/owner/cpurchace/${id}/`, {
              method: 'DELETE',
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization':`Token ${localStorage.getItem('token')}`
              },
            })
          }
          getallorders(){
  
            return fetch('http://127.0.0.1:8000/owner/cpurchace/', {
            method: 'GET',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              'Authorization':`Token ${localStorage.getItem('token')}`
              
            },
          })
          
            } 
            
            getspec_ser(id:any){
              return fetch(`http://127.0.0.1:8000/owner/getallser/${id}/`, {
                method: 'GET',
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                  'Authorization':`Token ${localStorage.getItem('token')}`
                },
              })
            }
            sndmsg(service:any,response:any){
              let data={
                
                service,
                response
              }
              return fetch(`http://127.0.0.1:8000/owner/adminresponce/`, {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                  'Authorization':`Token ${localStorage.getItem('token')}`
                },
              })
            }
            notifi(){
  
              return fetch('http://127.0.0.1:8000/owner/adminresponce/', {
              method: 'GET',
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization':`Token ${localStorage.getItem('token')}`
                
              },
            })
            
              }  


              deltnotifi(id:any){
                return fetch(`http://127.0.0.1:8000/owner/adminresponce/${id}/`, {
                  method: 'DELETE',
                  headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization':`Token ${localStorage.getItem('token')}`
                  },
                })
              }


              countnoti(){
  
                return fetch('http://127.0.0.1:8000/owner/adminresponce/counts/', {
                method: 'GET',
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                  'Authorization':`Token ${localStorage.getItem('token')}`
                  
                },
              })
              
                }  
            
}
