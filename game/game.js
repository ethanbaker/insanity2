//Copyright 2018 Ethan Baker. All rights reserved.
//Email ethandbaker01@gmail.com for additional rights.
let insanity2Info={deaths:0,levelIndex:0,playerSkin:"playerSkin1",skinColor:3139353,newSession:!0,background:"background1",user:""},defaultCache=()=>JSON.parse(JSON.stringify({deaths:0,levelIndex:0,playerSkin:"playerSkin1",skinColor:3139353,newSession:!0,background:"background1",user:""}));const resetCache=()=>insanity2Info=defaultCache();let first=!0;const load=()=>{let x=localStorage.getItem("insanity2Info");insanity2Info=x?JSON.parse(x):resetCache(),first&&(insanity2Info.newSession=!0,first=!1)},save=()=>{localStorage.setItem("insanity2Info",JSON.stringify(insanity2Info))},resetStorage=()=>{insanity2Info={deaths:0,levelIndex:0,playerSkin:"playerSkin1",skinColor:3139353,newSession:!0,background:"background1",user:""},save(),location.reload()},levels=[["xxxxxxxxxxxxxxxxxxxxxxx","x!         !          x","x!                 o  x","x!         o          x","x!                    x","x!     o   !    x     x","xxxxxxxxxxxxxxxxx!!!!!x","xxxxxxxxxxxxxxxxxxxxxxx"],["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","x                                x                x","x                                x                x","x                                x       o        x","x                                x                x","x                                x                x","x                                x               xx","xxxxxxxxxxxx                     x!!!!!x          x","xxxxxxxxxxxx                     x                x","xxxxxxxxxxxx                s    x           x    x","xxxxxxxxxxxx                   o x           !    x","xxxxxxxxxxxx!!        xxxxxxxxxxxx!!!x            x","xxxxxxxxxxxx                     x                x","xxxxxxxxxxxx                     x         x      x","xxxxxxxxxxxx                     d         !      x","xxxxxxxxxxxx                     d               xx","xxxxxxxxxxxx                o    x                x","xxxxxxxxxxxx!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","x                                             xo  x","x                                             x   x","x                                             x  xx","x                                             x   x","x                                             xx  x","x                                             x   x","x                      !                      x  xx","xxxxxxxxxtttttttttttttt!ttttttttttttttttttttttxtttx","xwwwwwwwwwwwwwwwwwwwwww!wwwwwwwwwwwwwwww!!!!!!xwwwx","xwwwwwwwwwwwwwwwwwwwwww!wwwwwwww!wwwwwwwwwwwwwxwwwx","xwwwwwwwwwwwwwwwwwwwwww!wwwwwwww!wwwwwwwwwwwOwxwwwx","xwwwwwwwwwwwwwwwwwwwwww!wwwwwwww!wwwwwwwwwwwwwxwwwx","xwwwwwwwwwwwwwwwwwwwwww!wwwwwwww!wwwwwww!!!!!!xwwwx","x!www!wwwwwwwwwwwwwwwww!wwwwwwww!wwwwwwwwwwwwwxwwwx","x!www!wwwwwwwwwwwwwwwwwwwwwwwwww!wwwwwwwwwwwwwxwwwx","x!wOw!wwwwwwwwwwwwwwwwwwwwwwwwww!wwwwwwwwwwwwwwwwwx","xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","x     x     x                                     x","x     x     x                                 x   x","x     x  o  x                                 x   x","x     x     x                                 x   x","x     x     x                            xxxjjx   x","x     x     xxxx                              x   x","x      p                                      x   x","xxxxxxxxjjxx   rr!!!!!!!!!!!!!!xxxxx!!jj!!!!!!x   x","xxxxxxxxxxxx!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x","x                                                 x","x                                                 x","x                                                 x","x                                                 x","x                                                 x","x    o            o                               x","x!!!!x!!!!!!!!!!!jx!!!!!!!!!!!lll!!!!!!!!!!!!!llllx","xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","x                                                 x","x                                                ox","x                                                 x","x                                                 x","x                                         x       !","x                                x        x    rrr!","x                 rrrr                    !       !","x                                         !lll    x","xxxxxxx      j                            !       x","x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x!!!!   x","x                                                 x","x                                                 x","x                                                 x","x          p                                      x","!         xxxxxx                                  x","!lllll    !                                       x","!         !          j        o                   x","x    rrrrr!                   x                   x","x        !!                                       x","x         !                                       x","x         !                                       x","x        o!                           j         xxx","x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x","xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","x               !!!!!!!!!!!!!!!!              x","x               !!!!!!!!!!!!!!!               x","x               !!!!!!!!!!!!!!                x","x               !!!!!!!!!!!!!    xttttttttttttx","x               !!!!!!!!!!!!     xwwww!wwwwwwwx","x               !!!!!!!!!!!!     xww!wwwwwww!wx","xxxxxxxxxxx    !!!!!!!!!!!!!    jxwwwwwwwwwwwwx","x!!!!!!!!!    !!!!!!!!!!!!!!     x!!!!!!wwwww!x","x!!!!!!!!    !!!!!!!!!!!!!!!     xwwwwwwwwwwwwx","x!!!!!!!    !!!!!!!!!!!!!!!!j    xwwwwwwww!!!!x","x!!!!!!    !!!!!!!!!!!!!!!!!     xwwwww!!!!wwwx","xxxxx!    !!!!xxxxxxxxxxxxxx    xxwwww!wwww!wwx","x o                              xwww!wwwwwwwwx","xxxxxxxxxxxxxxxxxxxx    xxxxxxxxxx!ww!wwwwwwwwx","xxxxxxxxxxxxxxxxxxx!    !xxxxxxxxx!wwwwwwww!wwx","xxxxxxxxxxxxxxxxxxx!   r!xxxxxxxxx!wwwwwwwww!wx","xxxxxxxxxxxxxxxxxxx!    !xxxxxxxxx!!wwww!wwww!x","xxxxxxxxxxxxxxxxxxx!l   !xxxxxxxxx!!!ww!!wwww!x","xxxxxxxxxxxxxxxxxxx!    !xxxxxxxxx!!!!!!!www!wx","xxxxxxxxxxxxxxxxxxx!o  r!xxxxxxxxx!!!!!!!!wwwOx","xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","x                           x         !                  x","x                           !                            x","x                                     o                  x","x                           o                            x","x                                     x  !!!!!xxx        x","x                           x         !!!!!!!!!xx        x","xxxxxxxxxxrrrrrr          !!!!!!!!!!!!!!!!!!!!!!x        x","x!!!!!!!!!!!!!!!!!!!!!!!!!!         !!!!!!!!!!!!!       !x","x                       x           !!!!!!!!!!!!       !!x","x                                 o !!!!!!!!!!!       !!!x","x                                   !!!!!!!!!!       !!!!x","x                  xrr      DD!!!!!!!!!!!!!!!       !!!!!x","x      rrr                  !!!!!!!!!!!!!!!!       !!!!!!x","x                           !!!!!!!!!!!!!!!       !!!!!!!x","x   x                       !!!!!!!!!!!!!!       !!!!!!!!x","x                                   !!!!!       !!!!!!!!!x","xS     x                            !!!!         !!!!!!!!x","x                 llx               !!!          !!!!!!!!x","x              x                                 !!!!!!!!x","x                           x                  rr!!!!!!!!x","x                                          !!!!!!!!!!!!!!x","xx          j                       jjxxxx!!!!!!!!!!!!!!!x","x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x","xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","x                  !!!!!                    !!!!!x","x                   !!                       !!!!x","x                                            !!!!x","x                    o                        !!!x","xxxxxxxxxxx          x   !!!   rr             !!!x","x!!!!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!          !!x","x!!!!!!          x p  o  d  !!!!!!!!!!         !!x","x!!!!!             xxxxxxxtt!!!!!!!!!!!         !x","x                      !!!wwwww!!!!!!!!!        !x","x                      !!wwwwwwww!!!!!!!!      !!x","x   xxxxxx     rrrrrr  !!wwwwwwwwwwwww!!!      !!x","x   !!!!!!!!!!!!!!!!!SS!wwwww!!wwwwwwww!!      !!x","x     !             !  !www!!!!!wwwwwwww!      !!x","x                   !  wwwww!!!!!ww    w!!    !!!x","x         s         !  !wwws!!!!!!x    x!!!  !!!!x","x       !           !   !www!!!!!!!            !!x","xrrr     !!         !!!!!!xx!!!!!!!!jjjxrrrrrrr!!x","x                        !!!!           !!!!!!!!!x","x                        !!!                    ox","x!!!!!!!!dddd!!!!!!!!!!!!!!            xxxxxxxxxxx","x                                 j              x","x                                                x","x                                                x","x                                                x","x                  x                             x","x     rrr                    x         j         x","x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x","xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","x!                     !!x!!!               !!!!!!!!!!!!!!!x","x                       !x!!                    !!!!!!!!!!!x","x  xxxxxxxxxxxx         !x!            rr        !!!!!!!!!!x","x  x                 ll!x             !!!!!       !!!!!!!!!x","x  x    ddxxx         !!x             !!  !!       !!!!!!!!x","x  xxx      x!x!!!!!!!!!x             !! o !!       !!!!!!!x","x   x        xxxxxxxxxxxxx!jj         !!    !!       !!!!!!x","x   x                 s  !!!!         !!     !!       !!!!!x","x!  x                    !!!          !!xx    !!       !!!!x","x!  x      j            !!!          j!!       !!       !!!x","x!  x                   !!            !!     xx!!       !!!x","x!  x                  !!           x !!       !!       !!!x","x!  x              j   !           xxx!!xx      !!     !!!!x","x!  x             xxx!!       o       !!        !!     !!!!x","x!  x!!!!    xx!!!!!!       xxxx!     !!     x   !!   !!!!!x","x!       !xxx!!             !!!!!!!!!!!!     !!!!!!   !!!!!x","x!                      x!!!!!!!!!!!!!!!xx    !!!        o x","x!                    !!!!!!!!!!!!!!!!!!!!!    !dddxxxxxxxxx","xxrrr!!            x!!!!!!!!!!!!!!!!!!!!!!!!       !!!!!!!!x","xxxxxx!!xxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!j     !!!!!!!!x","xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","x!!!!!!x                                     x","x!!!!!!x    llxxxxxxxxxxxxxxxx            x  x","xxxxxxxx  !!!!!!!!!!!!!!!!!!!!!!xxx    xx!!x x","x                !!!!!!!!!!!!!!!!xx          x","x!!x     x         !!!!!!!!!!!!!!!!      xxxxx","xo d     x           !!!!!!!!!!!!xxx         x","xxxxxxxxxx             !!!!!!!!!!!!!xttttttttx","x!!!!!!!!!               !!!!!!!!!!!xwwwwww!!x","x!!!!!!!!!     !!!!        !!!!!!!!!xwwwwwwwwx","x!!!!!!!!!   !!xxxx!       !!!!!!!!!x!!!!wwwwx","xxxxxxxxxxjj!!xxxxxx!      !!!!xxxx!xwwwwwwwwx","x!!wwwwwwwwww!xxxxxx!      !!!Owwwwwwwwwwwwwwx","x!!www!!!wwww!xxxxxx!      !!!xx!!xxxwwwww!!!x","x!!ww!!!!wwww!xxxxxx!      !!!!!!!!!xwwwwwwwwx","x!!ww!!!!!wwww!xxxx!       !!!!!!!!!x!wwwwwwwx","x!!ww!!!!!!wwww!!!!        !!!!!!!!!xwwwwww!!x","x!!ww!!!!!!!wwwwwww       !!!!x!!!!!xwwwwwwwwx","x!!wwxxxxxxxxwwwwww     !!!!! s    !x!!!!wwwwx","x!!wwxxxxxxxxxxxxxx   !!!!!!!x      xwwwwwwwwx","xxxwwxxxxxxxxxxxxxxjjjxxxxxxxxx     xxxxxxwwxx","x         !    !!!!!!!!    !!!!x    d   !    x","x               !!!!!!      !!!!!   d   !    x","x                                   x   !    x","xrrrr                              jx    j   x","x!!!!                               x        x","x!!!!           rrr     jj    r     x       xx","x!!!!!!!!!    !!!!!!!!!!!!!!!!!!!!!!x x     ox","x!!!!!!!!!!jj!!!!!!!!!!!!!!!!!!!!!!!x       xx","xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!xx","xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","x         JJ        ggggrrrrrr              lllllx","x                                                x","x                                                x","x                                                x","x                                                x","x                                                x","x                                                x","x                        s                       x","x                                                x","x                                                x","x                                                x","x                                                x","x                                                x","x                                            dd  x","x                                                x","x        jj         g                            x","xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"]],levelInfo=[{x:100,y:100,c:3},{x:100,y:128,c:3},{x:100,y:144,c:3},{x:64,y:144,c:3},{x:64,y:160,c:3},{x:64,y:128,c:3},{x:64,y:128,c:3},{x:96,y:112,c:3},{x:80,y:128,c:3},{x:112,y:128,c:3},{x:80,y:96,c:3}];let score=0,leftV=-160,rightV=160,upV=160,ran=!0;const keys="UP,DOWN,LEFT,RIGHT,SPACE,W,A,S,D";let deathCount,levelCount,deathCounter,levelCounter,sped,switchStatus,switched,blockSwitched,keyboard,grounded,inverse=-1;const deathCounterStyle={fontSize:"6em",fontFamily:"-apple-system BlinkMacSystemFont Segoe UI Roboto Oxygen Ubuntu Cantarell Open Sans Helvetica Neue sans-serif",color:"white",zIndex:11},levelCounterStyle={fontSize:"6em",fontFamily:"-apple-system BlinkMacSystemFont Segoe UI Roboto Oxygen Ubuntu Cantarell Open Sans Helvetica Neue sans-serif",color:"white",zIndex:11};let gameObject={width:1420,height:1e3,physics:{default:"arcade",arcade:{gravity:{y:300,x:0}}},scene:{preload:preload,create:create,update:update,extend:{createLevel:createLevel,stopV:stopV,takeCoin:takeCoin,takeWaterCoin:takeWaterCoin,restart:restart,restart:restart,speedLeft:speedLeft,speedRight:speedRight,jump:jump,swim:swim,switchOff:switchOff,switchOn:switchOn,push:push,stopPushV:stopPushV,pushLeft:pushLeft,pushRight:pushRight,pushOverlap:pushOverlap,blockSwitchOff:blockSwitchOff,blockSwitchOn:blockSwitchOn,changeGravity:changeGravity}}};function preload(){load(),this.load.image("background1","./game-assets/backgrounds/stone-background-dark.png"),this.load.image("background2","./game-assets/backgrounds/wood-background.png"),this.load.image("playerSkin1","./game-assets/skins/playerSkin1.png"),this.load.spritesheet("playerSkin2","./game-assets/skins/playerSkin2.png",{frameWidth:16,frameHeight:16,endFrame:10}),this.load.image("playerSkin3","./game-assets/skins/playerSkin3.png"),this.load.image("playerSkin4","./game-assets/skins/playerSkin4.png"),this.load.image("wall","./game-assets/other/wall.png"),this.load.image("death","./game-assets/other/lava.jpg"),this.load.spritesheet("speed","./game-assets/other/speed.png",{frameWidth:16,frameHeight:16,endFrame:7}),this.load.spritesheet("jump","./game-assets/other/trampoline.png",{frameWidth:16,frameHeight:16,endFrame:5}),this.load.spritesheet("gravityBlock","./game-assets/other/gravity.png",{frameWidth:16,frameHeight:16,endFrame:16}),this.load.spritesheet("coin","./game-assets/other/coins.png",{frameWidth:16,frameHeight:16,endFrame:7}),this.load.spritesheet("waterCoin","./game-assets/other/water-coins.png",{frameWidth:16,frameHeight:16,endFrame:7}),this.load.spritesheet("waterTop","./game-assets/other/water-top.png",{frameWidth:16,frameHeight:16,endFrame:8}),this.load.image("water","./game-assets/other/water.png"),this.load.image("switchUp","./game-assets/other/switch-up.png"),this.load.image("switchDown","./game-assets/other/switch-down.png"),this.load.image("switchDoor","./game-assets/other/red-door.png"),this.load.image("emptyDoor","./game-assets/other/empty-door.png"),this.load.image("pushBlock","./game-assets/other/push-block.png")}function create(){levelCount=insanity2Info.levelIndex,0===insanity2Info.levelIndex||insanity2Info.newSession?(this.anims.create({key:"coinSpin",frames:this.anims.generateFrameNumbers("coin",{start:0,end:6,first:6}),framerate:5,repeat:-1}),this.anims.create({key:"waterCoinSpin",frames:this.anims.generateFrameNumbers("waterCoin",{start:0,end:7,first:7}),framerate:5,repeat:-1}),this.anims.create({key:"speedRight",frames:this.anims.generateFrameNumbers("speed",{start:0,end:3,first:3}),framerate:7,repeat:-1}),this.anims.create({key:"speedLeft",frames:this.anims.generateFrameNumbers("speed",{start:4,end:7,first:7}),framerate:7,repeat:-1}),this.anims.create({key:"jumpUp",frames:this.anims.generateFrameNumbers("jump",{start:0,end:5,first:5}),framerate:4,repeat:0}),this.anims.create({key:"waves",frames:this.anims.generateFrameNumbers("waterTop",{start:0,end:8,first:8}),framerate:12,repeat:-1}),this.anims.create({key:"rainbow",frames:this.anims.generateFrameNumbers("playerSkin2",{start:0,end:9,first:9}),framerate:5,repeat:-1}),this.anims.create({key:"gravitySpin",frames:this.anims.generateFrameNumbers("gravityBlock",{start:0,end:16,first:16}),framerate:12,repeat:-1}),insanity2Info.newSession=!1):this.player.destroy(),insanity2Info.background="background1",this.add.image(0,0,insanity2Info.background).setOrigin(0,0),this.player=this.physics.add.sprite(levelInfo[insanity2Info.levelIndex].x,levelInfo[insanity2Info.levelIndex].y,insanity2Info.playerSkin),this.player.setCollideWorldBounds(!0),this.player.setDepth(1),"playerSkin1"===insanity2Info.playerSkin?this.player.setTint(Number("0x"+String(insanity2Info.skinColor))):"playerSkin2"===insanity2Info.playerSkin&&this.player.play("rainbow"),this.player.setGravity(0,1),console.log(this.player.body.gravity),keyboard=this.input.keyboard.addKeys(keys),this.walls=this.physics.add.staticGroup(),this.coins=this.physics.add.staticGroup(),this.waterCoins=this.physics.add.staticGroup(),this.deathBlocks=this.physics.add.staticGroup(),this.spikes=this.physics.add.staticGroup(),this.speedLeftBlocks=this.physics.add.staticGroup(),this.speedRightBlocks=this.physics.add.staticGroup(),this.jumpBlocks=this.physics.add.staticGroup(),this.waterBlocks=this.physics.add.staticGroup(),this.topWaterBlocks=this.physics.add.staticGroup(),this.onSwitches=this.physics.add.staticGroup(),this.offSwitches=this.physics.add.staticGroup(),this.doors=this.physics.add.staticGroup(),this.emptyDoors=this.physics.add.staticGroup(),this.pushables=this.physics.add.group(),this.gravityBlocks=this.physics.add.staticGroup(),this.physics.add.collider(this.player,this.walls,this.stopV,null,this),this.physics.add.collider(this.player,this.doors,this.stopV,null,this),this.physics.add.collider(this.player,this.gravityBlocks,this.changeGravity,null,this),this.physics.add.collider(this.player,this.jumpBlocks,this.jump,null,this),this.physics.add.collider(this.player,this.speedLeftBlocks,this.speedLeft,null,this),this.physics.add.collider(this.player,this.speedRightBlocks,this.speedRight,null,this),this.physics.add.collider(this.walls,this.pushables,this.stopPushV,null,this),this.physics.add.collider(this.deathBlocks,this.pushables,this.stopPushV,null,this),this.physics.add.collider(this.speedLeftBlocks,this.pushables,this.pushLeft,null,this),this.physics.add.collider(this.speedRightBlocks,this.pushables,this.pushRight,null,this),this.physics.add.collider(this.pushables,this.jumpBlocks,this.jump,null,this),this.physics.add.collider(this.player,this.pushables,this.push,null,this),this.physics.add.collider(this.pushables,this.pushables),this.physics.add.overlap(this.player,this.pushables,this.pushOverlap,null,this),this.physics.add.overlap(this.player,this.coins,this.takeCoin,null,this),this.physics.add.overlap(this.player,this.waterCoins,this.takeWaterCoin,null,this),this.physics.add.overlap(this.player,this.deathBlocks,this.restart,null,this),this.physics.add.overlap(this.player,this.spikes,this.restart,null,this),this.physics.add.overlap(this.player,this.waterBlocks,this.swim,null,this),this.physics.add.overlap(this.player,this.onSwitches,this.switchOff,null,this),this.physics.add.overlap(this.player,this.offSwitches,this.switchOn,null,this),this.physics.add.overlap(this.pushables,this.onSwitches,this.blockSwitchOff,null,this),this.physics.add.overlap(this.pushables,this.offSwitches,this.blockSwitchOn,null,this),44===insanity2Info.levelIndex&&(insanity2Info.user=prompt("You Win! Enter your initials to be put on the high score leader board!"),def(insanity2Info.user,insanity2Info.deaths),alert("Here is a special skin for you to use:\nzkfFpao1kiJRVAEn7pECkg==")),this.createLevel(),deathCounter=this.add.text(1e3,600,`Deaths: ${insanity2Info.deaths}`,deathCounterStyle),levelCounter=this.add.text(1e3,525,`Level: ${insanity2Info.levelIndex+1}`,levelCounterStyle)}function update(){(keyboard.UP.isDown||keyboard.W.isDown)&&(this.player.body.touching.down&&-1===inverse||this.player.body.touching.up&&1===inverse)?this.player.setVelocityY(upV*inverse):keyboard.LEFT.isDown||keyboard.A.isDown?this.player.setVelocityX(leftV):keyboard.RIGHT.isDown||keyboard.D.isDown?this.player.setVelocityX(rightV):sped&&this.player.setVelocityX(0),score===levelInfo[insanity2Info.levelIndex].c&&(insanity2Info.levelIndex+=1,score=0,levelCounter.setText(`Level: ${insanity2Info.levelIndex+1}`),this.create(),save()),this.player.body.touching.right||this.player.body.touching.left||this.player.body.touching.down||this.player.body.touching.up||(sped=!0),insanity2Info.deaths<deathCount&&(insanity2Info.deaths=deathCount,save(),alert("NO CHEATING"),location.reload()),insanity2Info.levelIndex!==levelCount&&(insanity2Info.levelIndex=levelCount,save(),alert("NO CHEATING"),location.reload()),ran=!0}function createLevel(){for(let x=0;x<levels[insanity2Info.levelIndex].length;x++)for(let e=0;e<levels[insanity2Info.levelIndex][x].length;e++)if("x"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"wall");this.walls.add(t),t.immovable=!0}else if("o"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"coin");t.play("coinSpin"),this.coins.add(t)}else if("O"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"waterCoin");t.play("waterCoinSpin"),this.waterCoins.add(t)}else if("!"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"death");this.deathBlocks.add(t)}else if("r"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"speed");this.speedRightBlocks.add(t),t.play("speedRight"),t.immovable=!0}else if("l"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"speed");this.speedLeftBlocks.add(t),t.play("speedLeft"),t.immovable=!0}else if("j"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"jump");this.jumpBlocks.add(t),t.play("jumpUp"),t.immovable=!0}else if("J"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"jump");this.jumpBlocks.add(t),t.angle=180,t.play("jumpUp"),t.immovable=!0}else if("w"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"water");this.waterBlocks.add(t),t.immovable=!0}else if("t"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"waterTop");this.topWaterBlocks.add(t),t.play("waves"),t.immovable=!0}else if("s"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"switchUp");this.onSwitches.add(t)}else if("S"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"switchDown");this.offSwitches.add(t)}else if("d"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"switchDoor");this.doors.add(t)}else if("D"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"emptyDoor");this.emptyDoors.add(t)}else if("p"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"pushBlock");this.pushables.add(t),t.body.maxVelocity={x:100,y:1e4}}else if("g"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"gravityBlock");this.gravityBlocks.add(t),t.play("gravitySpin")}}function stopV(){upV=160,leftV=-160,rightV=160,this.player.body.touching.down&&(switched=!0,sped=!0,this.player.setVelocityX(0)),this.player.body.touching.up&&this.player.setVelocityX(0)}function takeCoin(x,e){upV=0,e.anims.isPlaying=!1,e.destroy(),ran&&(score+=1,ran=!1)}function takeWaterCoin(x,e){let t=this.add.sprite(e.x,e.y,"water");this.waterBlocks.add(t),t.immovable=!0,e.anims.isPlaying=!1,e.destroy(),ran&&(score+=1,ran=!1)}function restart(x,e){this.coins.getChildren().map(x=>{this.coins.killAndHide(x)}),leftV=-160,rightV=160,x.x=levelInfo[insanity2Info.levelIndex].x,x.y=levelInfo[insanity2Info.levelIndex].y,score=0,deathCount=insanity2Info.deaths,ran&&(ran=!1,insanity2Info.deaths>=9999999?insanity2Info.deaths=9999999:insanity2Info.deaths+=1);for(let x=0;x<levels[insanity2Info.levelIndex].length;x++)for(let e=0;e<levels[insanity2Info.levelIndex][x].length;e++)if("o"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"coin");t.play("coinSpin"),this.coins.add(t)}else if("O"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"waterCoin");t.play("waterCoinSpin"),this.waterCoins.add(t)}let t=this.emptyDoors.children.entries.length;for(let x=0;x<t;x++)this.emptyDoors.killAndHide(this.emptyDoors.children.entries[0]),this.emptyDoors.children.entries[0].destroy();let s=this.doors.children.entries.length;for(let x=0;x<s;x++)this.doors.killAndHide(this.doors.children.entries[0]),this.doors.children.entries[0].destroy();let i=this.onSwitches.children.entries.length;for(let x=0;x<i;x++)this.onSwitches.killAndHide(this.onSwitches.children.entries[0]),this.onSwitches.children.entries[0].destroy();let w=this.offSwitches.children.entries.length;for(let x=0;x<w;x++)this.offSwitches.killAndHide(this.onSwitches.children.entries[0]),this.offSwitches.children.entries[0].destroy();let n=this.pushables.children.entries.length;for(let x=0;x<n;x++)this.pushables.killAndHide(this.pushables.children.entries[0]),this.pushables.children.entries[0].destroy();for(let x=0;x<levels[insanity2Info.levelIndex].length;x++)for(let e=0;e<levels[insanity2Info.levelIndex][x].length;e++)if("s"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"switchUp");this.onSwitches.add(t)}else if("S"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"switchDown");this.offSwitches.add(t)}else if("d"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"switchDoor");this.doors.add(t)}else if("D"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"emptyDoor");this.emptyDoors.add(t)}else if("p"==levels[insanity2Info.levelIndex][x][e]){let t=this.add.sprite(32+16*e,32+16*x,"pushBlock");this.pushables.add(t),t.body.maxVelocity={x:100,y:100}}deathCounter.setText(`Deaths: ${insanity2Info.deaths}`),save()}function speedRight(){upV=160,-1===inverse?(this.player.body.touching.down&&this.player.setVelocityX(25),keyboard.LEFT.isDown||keyboard.A.isDown?leftV=-100:(keyboard.RIGHT.isDown||keyboard.D.isDown)&&(rightV=220)):(this.player.body.touching.up&&this.player.setVelocityX(25),keyboard.LEFT.isDown||keyboard.A.isDown?leftV=-100:(keyboard.RIGHT.isDown||keyboard.D.isDown)&&(rightV=220)),sped=!1}function speedLeft(x,e){upV=160,-1===inverse?(this.player.body.touching.down&&x.setVelocityX(-25),keyboard.RIGHT.isDown||keyboard.D.isDown?rightV=100:(keyboard.LEFT.isDown||keyboard.A.isDown)&&(leftV=-220)):(this.player.body.touching.up&&x.setVelocityX(-25),keyboard.RIGHT.isDown||keyboard.D.isDown?rightV=100:(keyboard.LEFT.isDown||keyboard.A.isDown)&&(leftV=-220)),sped=!1}function jump(x,e){rightV=160,leftV=-160,0===e.angle?keyboard.UP.isDown||keyboard.W.isDown?this.player.body.touching.down&&(e.play("jumpUp"),setTimeout(()=>{e.isPlaying=!1},500),"pushBlock"!==x.texture.key&&(upV=220)):this.player.body.touching.down&&(e.play("jumpUp"),setTimeout(()=>{e.isPlaying=!1},500),x.setVelocityY(120*inverse)):-180===e.angle&&(keyboard.UP.isDown||keyboard.W.isDown?this.player.body.touching.up&&(e.play("jumpUp"),setTimeout(()=>{e.isPlaying=!1},500),"pushBlock"!==x.texture.key&&(upV=220)):this.player.body.touching.up&&(e.play("jumpUp"),setTimeout(()=>{e.isPlaying=!1},500),x.setVelocityY(120*inverse)))}function swim(){if(leftV=-100,rightV=100,keyboard.DOWN.isDown||keyboard.S.isDown)return this.player.setVelocityY(100),!0;keyboard.UP.isDown||keyboard.W.isDown?this.player.setVelocityY(-80):this.player.setVelocityY(40)}function switchOff(x,e){if(upV=100,switched){e.destroy();let x=this.add.sprite(e.x,e.y,"switchDown");this.offSwitches.add(x),switched=!1;let t=this.doors.children.entries.length;for(let x=0;x<t;x++){this.doors.killAndHide(this.doors.children.entries[0]);let x=this.add.sprite(this.doors.children.entries[0].x,this.doors.children.entries[0].y,"emptyDoor");this.emptyDoors.add(x),this.doors.children.entries[0].destroy()}}}function switchOn(x,e){if(upV=100,switched){e.destroy();let x=this.add.sprite(e.x,e.y,"switchUp");this.onSwitches.add(x),switched=!1;let t=this.emptyDoors.children.entries.length;for(let x=0;x<t;x++){this.emptyDoors.killAndHide(this.emptyDoors.children.entries[0]);let x=this.add.sprite(this.emptyDoors.children.entries[0].x,this.emptyDoors.children.entries[0].y,"switchDoor");this.doors.add(x),this.emptyDoors.children.entries[0].destroy()}}}function push(x,e){e.body.touching.right&&e.body.touching.left||!e.body.touching.left&&!e.body.touching.right||(e.body.velocity.x=this.player.body.velocity.x)}function stopPushV(x,e){e.body.velocity.x=0,blockSwitched=!0}function pushLeft(x,e){!e.body.touching.down||e.body.touching.right||e.body.touching.left||(e.x-=.5,this.stopPushV(null,e))}function pushRight(x,e){!e.body.touching.down||e.body.touching.right||e.body.touching.left||(e.x+=.5,this.stopPushV(null,e))}function pushOverlap(x,e){x.x>e.x?keyboard.LEFT.isDown||keyboard.A.isDown?this.player.setVelocityX(-50):x.x+=1:x.x<e.x&&(keyboard.RIGHT.isDown||keyboard.D.isDown?this.player.setVelocityX(50):x.x-=1)}function blockSwitchOff(x,e){if(upV=100,blockSwitched){e.destroy();let x=this.add.sprite(e.x,e.y,"switchDown");this.offSwitches.add(x),blockSwitched=!1;let t=this.doors.children.entries.length;for(let x=0;x<t;x++){this.doors.killAndHide(this.doors.children.entries[0]);let x=this.add.sprite(this.doors.children.entries[0].x,this.doors.children.entries[0].y,"emptyDoor");this.emptyDoors.add(x),this.doors.children.entries[0].destroy()}}}function blockSwitchOn(x,e){if(upV=100,blockSwitched){e.destroy();let x=this.add.sprite(e.x,e.y,"switchUp");this.onSwitches.add(x),blockSwitched=!1;let t=this.emptyDoors.children.entries.length;for(let x=0;x<t;x++){this.emptyDoors.killAndHide(this.emptyDoors.children.entries[0]);let x=this.add.sprite(this.emptyDoors.children.entries[0].x,this.emptyDoors.children.entries[0].y,"switchDoor");this.doors.add(x),this.emptyDoors.children.entries[0].destroy()}}}function changeGravity(x,e){x.body.gravity.y>0?(x.setGravity(0,-600),inverse=1):x.body.gravity.y<0&&(inverse=-1,x.setGravity(0,1)),switched=!0}let game=new Phaser.Game(gameObject);