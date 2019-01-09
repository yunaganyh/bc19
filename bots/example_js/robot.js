import {BCAbstractRobot, SPECS} from 'battlecode';

var built = false;
var step = -1;

class MyRobot extends BCAbstractRobot {
    turn() {
        step++;

        if (this.me.unit === SPECS.CRUSADER) {
            // this.log("Crusader health: " + this.me.health);
            const visible = this.getVisibleRobots();
            const attackable = [];
            // this.log('hi');
            // this.log(SPECS['UNITS']);
            for (const r in visible) {
                if (! r.x) {
                    continue;
                }
                const dist  = (r.x + this.me.x)**2 + (r.y + this.me.y)**2
                if (r.team != this.me.team && this.isVisible(r) && SPECS['UNITS'][SPECS['CRUSADER']]['ATTACK_RADIUS']) {
                    attackable.push(r);
                } 
            }
            if (attackable != []){
                this.log(attackable);
            }

            const choices = [[0,-1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1]];
            const choice = choices[Math.floor(Math.random()*choices.length)]
            return this.move(...choice);
        }

        else if (this.me.unit === SPECS.CASTLE) {
            if (step % 10 === 0) {
                this.log("Building a crusader at " + (this.me.x+1) + ", " + (this.me.y+1));
                return this.buildUnit(SPECS.CRUSADER, 1, 1);
            } else {
                return // this.log("Castle health: " + this.me.health);
            }
        }

    }
}

var robot = new MyRobot();