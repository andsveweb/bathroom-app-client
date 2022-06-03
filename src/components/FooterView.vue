<template>

  <footer class="footer">
    <div class="footer-left">
      <a href=" ">
        <i class="fab fa-facebook-square"></i>
      </a>
      <a href=" ">
        <i class="fab fa-twitter-square"></i>
      </a>
      <a href=" ">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
    <!--copy right-->
    <div class="footer-right">
      <p>
        &copy; 2022-06-02 by
        
          <span>Andreas Svensson</span>
      
      </p>
    </div>
    
  </footer>
</template>

<script>

export default { 
  
  }


</script>

<style scoped>
.footer {
  position: absolute;
  margin-top: 2rem;
  background: #202122;
  width: 100%;
  padding: 100px 0px;
  overflow: hidden;
  opacity: 0.9;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
}

.footer-right {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
}

i {
    color: #fff;
    font-size: 2rem;
    margin: 0 1rem;

  }
  
  i:hover {
    color: rgb(71, 165, 99);
    font-size: 2rem;
    margin: 0 1rem;
    transition: 0.3s;
  }
  .footer {
    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    }
    .footer-left {
      @media screen and (max-width: 600px) {
        width: 100%;
        text-align: center;
        
      }
    }
    .footer-right {
      @media screen and (max-width: 600px) {
        width: 100%;
        
        text-align: center;
      }
    }
    
  
  
  
  



















































 
</style>
