# Ping Pong Less

this is a mixture of two games tennis and calssic ping pong...
The controlls are pretty simple -> to move up and down use 'W' and 'S' or 'up arrow' and 'down arrow'

## How i made 
I used pure HTML to make this game...

## How to play
to play this game you can copy this and paste in your chrome search
<hr>
data:text/html,<meta%20name=viewport%20content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"><title>Ping%20Pong%20Less</title><style>*{box-sizing:border-box}body{margin:0;background:%23171322;color:%23fff;font:18px%20"Times%20New%20Roman";display:grid;place-content:center;height:100dvh;overflow:hidden}canvas{width:100vw;height:70vh;border:3px%20solid%20%23fff;touch-action:none}p{text-align:center}button{padding:9px;background:%235af;font:bold%2018px%20"Times%20New%20Roman"}</style><canvas%20id=c></canvas><p%20id=t>YOU%200%20-%200%20CPU</p><button%20id=b>START%20/%20SERVE</button><script>let%20W,H,P,y,a,x,z,g=c.getContext("2d"),dx=0,dy=0,v=4.8,s=0,q=0,go=0,d=1,k={},tr=[];function%20size(){W=c.width=c.clientWidth,H=c.height=c.clientHeight,P=.17*H,y=y%7C%7CH/2,a=a%7C%7CH/2,x=x%7C%7CW/2,z=z%7C%7CH/2}function%20reset(t){x=W/2,z=H/2,dx=dy=0,v=4.8,go=0,d=t}function%20serve(){go%7C%7C(go=1,dx=d*v,dy=3*(Math.random()-.5))}function%20pos(t){let%20e=c.getBoundingClientRect();y=Math.max(0,Math.min(H-P,(t.clientY-e.top)*H/e.height-P/2))}function%20f(t,e){g.fillStyle="%23f8c";for(let[l,i]of[[-1,-1],[0,-1],[-2,0],[0,0],[-1,1]])g.fillRect(t+4*l,e+4*i,4,4);g.fillStyle="%23fd4",g.fillRect(t-4,e,4,4)}function%20draw(e){let%20l=Math.min((e-(draw.l%7C%7Ce))/16.7%7C%7C1,2);draw.l=e,(k.ArrowUp%7C%7Ck.w)&&(y-=7*l),(k.ArrowDown%7C%7Ck.s)&&(y+=7*l),y=Math.max(0,Math.min(H-P,y)),g.fillStyle="%23278447",g.fillRect(0,0,W,H),g.fillStyle="%23319653";for(let%20t=0;t<14;t++)for(let%20e=0;e<7;e++)(t+e)%252==0&&g.fillRect(t*W/14,e*H/7,W/14,H/7);g.strokeStyle="white",g.lineWidth=3,g.strokeRect(1,1,W-2,H-2),g.setLineDash([12,12]),g.beginPath(),g.moveTo(W/2,0),g.lineTo(W/2,H),g.stroke(),g.setLineDash([]);for(let%20t=0;t<Math.min(12,W/85);t++)f(137*t%25W,197*t%25H);if(g.fillStyle="%2343a5ff",g.fillRect(15,y,14,P),g.fillStyle="%23b17aff",g.fillRect(W-29,a,14,P),go){v=Math.min(9,v+.001*l);let%20t=Math.hypot(dx,dy)%7C%7C1;dx=dx/t*v,dy=dy/t*v,x+=dx*l,z+=dy*l,(z<7%7C%7Cz>H-7)&&(dy=-dy),z=Math.max(7,Math.min(H-7,z)),a=Math.max(0,Math.min(H-P,a+Math.max(-3*l,Math.min(3*l,z-P/2-a)))),dx<0&&x<36&&x>15&&z>y-7&&z<y+P+7&&(x=36,dx=-dx,dy+=.035*(z-y-P/2),v=Math.min(9,v+.18)),dx>0&&x>W-36&&x<W-15&&z>a-7&&z<a+P+7&&(x=W-36,dx=-dx,dy+=.025*(z-a-P/2),v=Math.min(9,v+.18)),x<-8&&(q++,reset(1)),x>W+8&&(s++,reset(-1))}go?(tr.push([x,z]),tr.length>3*v&&tr.shift()):tr=[],tr.forEach((t,e)=>{g.globalAlpha=(e+1)/tr.length*.6,g.fillStyle="%239df",g.beginPath(),g.arc(t[0],t[1],2+4*(e+1)/tr.length,0,7),g.fill()}),g.globalAlpha=1,g.fillStyle="white",g.beginPath(),g.arc(x,z,7,0,7),g.fill(),g.textAlign="center",g.font='bold%2024px%20"Times%20New%20Roman"',g.fillText(s+"%20:%20"+q,W/2,30),t.textContent="YOU%20"+s+"%20-%20"+q+"%20CPU",requestAnimationFrame(draw)}size(),onresize=size,c.onpointermove=pos,c.onpointerdown=t=>{pos(t),serve()},b.onclick=serve,onkeydown=t=>{k[t.key]=1,"Space"==t.code&&(serve(),t.preventDefault())},onkeyup=t=>k[t.key]=0,draw(0)</script>
</hr>
 (OR)
 you can get the link from the "game-yrl.txt"

 ### You dont need ant nmp or any resources to run this game

 ## AI Usage 
 yeah guys i used a little bit of AI for help, i used AI to help me compress the code

 ### Git commits
 I dont have a good laptop, so its weekend and i used my cousin's laptop to make this game, so you may see his name in commits...

This is a screen shot me playing the game
 <img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/f9d3111c-3ecb-4295-b4df-3ad629750268" />


### THANKYOU <3
