alert("You are a man named Uncle Dale who is a man of questionable sanity and is overall devoted to Harpoons. Right now you are in a plane. The mission today is to secure a Harpoon manufacturing plant that has been taken over by anti harpooners. Goodluck");

const para_nopara = prompt("Do you (1) grab a parachute and jump or (2) jump without a parachute?");
let room_yard = 0;
let check_move = 0;
let win_lose = 0;

    if(para_nopara == 1) {
        room_yard = prompt("After landing safely on the ground you see two options. (1) move though the demolished wall into the court yard or (2) enter the nearest building?")
    } else {
    alert("You jumped out of a plane without a parachute and died on impact with the ground :\ not sure what you were expecting")
    }

    if(room_yard == 1) {
        check_move = prompt("You burst through the iron double doors to see a storage depot, it is very quiet in the building. Do you (1) exit the building to head to the main one or (2) check the building for enemies?")
    } else {
        alert("You run into the court yard and get nailed by a harpoon because of the lack of cover. (queue sad music)")
   
    if(check_move = 1) {
        charge_dist = prompt("You check the building and find an enemy soldier, after you harpoon him you exit the building to be face to face with a heavily armored man who appears to be the leader. Do you (1) stay back and try a ranged attack or (2) charge him in his moment of suprise?")
    } else {
        alert("As you leave the building you see a heavily armored man who is looking past you. Before you can turn around you are harpooned in the back. These folk arent one of high morality")
    }

    if(charge_dist = 1) {
        win_lose = prompt("You fall back to get a distance between you two, as the giant wall of a human charges, you 360 noscope him with one of your harpoons stopping him in his tracks. You look around and your allies have cleared the rest of the brutes out. CONGRADULATIONS, YOU WIN!!!")
    } else {
        alert("You slam into the hulking figure and bounce to the floor landing on your back, the man laughs. This isnt going to end well.")
    }
    }