
let us1_name,us2_name,us1_color,us2_color;


function color_set(id)
{
    
    if(id=="red")
    {
        us1_color="red";
        us2_color="yellow";
    }
    else
    {
        us1_color="yellow";
        us2_color="red";
    }
}


function checkall(){

    let u1nametemp = document.getElementById("user1").value;
    let u2nametemp = document.getElementById("user2").value;
    
    if(
        

    document.getElementById("user1").value!=null&&
    document.getElementById("user2").value!=null&&
    us1_color!=null&&
    us2_color!=null
    )
    {
    //console.warn("these are the details filled \n "+"User 1\n"+u1nametemp+" Color"+u1color+"\n"+"User 2\n"+u2nametemp+" Color"+u2color);
    return true;
    }
    else return false;
    }

    function submit(){

        if(checkall()){
    
        u1name=document.getElementById("user1").value;
        u2name=document.getElementById("user2").value;
        document.getElementById("popup").style.display="none";
        document.getElementById("main").style.display="flex";
        alert("Always User 1 Goes first. Hence the place for first move is "+u1name+" With color "+ us1_color);
       
        }
        else{
        alert("Please fill all the fields!");
        }
        }



    const arr=[[0,0,0],[0,0,0],[0,0,0]];
    let cnt_1=0,cnt_2=0;


    function check(x)
    { 

        for(let i=0;i<3;i++)
        {
            if(arr[i][0]==arr[i][1]&&arr[i][2]==arr[i][1]&&arr[i][0]==x)
            {
                return true;
            }
        }
        for(let i=0;i<3;i++)
        {
            if(arr[0][i]==arr[1][i]&&arr[2][i]==arr[1][i]&&arr[0][i]==x)
            {
                return true;
            }
        }
        if(arr[0][0]==arr[1][1]&&arr[1][1]==arr[2][2]&&arr[0][0]==x)
        {
            return true;
        }
        if(arr[1][1]==arr[0][2]&&arr[1][1]==arr[2][0]&&arr[1][1]==x)
        {
            return true;
        }
        
        return false;


    }








    function go(id)
    {
        let x;
        
        if(id=="00")x=arr[0][0];
        if(id=="01")x=arr[0][1];
        if(id=="02")x=arr[0][2];
        if(id=="10")x=arr[1][0];
        if(id=="11")x=arr[1][1];
        if(id=="12")x=arr[1][2];
        if(id=="20")x=arr[2][0];
        if(id=="21")x=arr[2][1];
        if(id=="22")x=arr[2][2];
    
       if(x!=0)
       {
           alert('already chosen');
       }
      
       if(cnt_1==cnt_2)
       { 
        let yoyo = document.getElementById(id);
        yoyo.style.backgroundColor=us1_color;
           cnt_1++;
           if(id=="00")arr[0][0]=1;
           if(id=="01")arr[0][1]=1;
           if(id=="02")arr[0][2]=1;
           if(id=="10")arr[1][0]=1;
           if(id=="11")arr[1][1]=1;
           if(id=="12")arr[1][2]=1;
           if(id=="20")arr[2][0]=1;
           if(id=="21")arr[2][1]=1;
           if(id=="22")arr[2][2]=1;
            if(check(1))
            {
                alert("player 1 won ");
                document.getElementById("popup").style.display="inline-block";
                document.getElementById("main").style.display="none";
            }
       }
       else
       {
        let yoyo = document.getElementById(id);
        yoyo.style.backgroundColor=us2_color;
        cnt_2++;
        if(id=="00")arr[0][0]=-1;
        if(id=="01")arr[0][1]=-1;
        if(id=="02")arr[0][2]=-1;
        if(id=="10")arr[1][0]=-1;
        if(id=="11")arr[1][1]=-1;
        if(id=="12")arr[1][2]=-1;
        if(id=="20")arr[2][0]=-1;
        if(id=="21")arr[2][1]=-1;
        if(id=="22")arr[2][2]=-1;
         if(check(-1))
         {
             alert("player 2 won ");
             document.getElementById("popup").style.display="inline-block";
             document.getElementById("main").style.display="none";
         }

       }





    }

    function yoyo(id)
    {
        let yoyo = document.getElementById(id);
        yoyo.style.backgroundColor="black";
    }



