import Arp1 from "./Arpeggios/100_C_Arps_SP_01.wav";
import Arp2 from "./Arpeggios/110_E_Arps_SP_01.wav";
import Arp3 from "./Arpeggios/130_A_G_Arps_SP_01.wav";
import Arp4 from "./Arpeggios/130_F_Arps_SP_01.wav";
import clap1 from "./Claps/clap_001.wav";
import clap2 from "./Claps/clap_002.wav";
import clap3 from "./Claps/clap_003.wav";
import clap4 from "./Claps/clap_004.wav";
import kick1 from "./Kicks/Kick 000 Original Sin.wav";
import kick2 from "./Kicks/Kick 001 Apollo.wav";
import kick3 from "./Kicks/Kick 002 Minimal.wav";
import kick4 from "./Kicks/Kick 003 Micro Dynamic.wav";
import kick5 from "./Kicks/Kick 004 Velocity.wav";
import bongo from "./Percussion/bongo_001c.wav";
import can from "./Percussion/can_003.wav";
import fingers from "./Percussion/fingers_001.wav";
import cymbal from "./Percussion/manipulated_cymb_001.wav";
import shaker from "./Percussion/shaker_003.wav";
import stick from "./Percussion/stick_001.wav";
import tabla from "./Percussion/tabla_001a.wav";

const arps = [
  { name: "100_C_Arps_SP_01", src: Arp1 },
  { name: "110_E_Arps_SP_01", src: Arp2 },
  { name: "130_A_G_Arps_SP_01", src: Arp3 },
  { name: "130_F_Arps_SP_01", src: Arp4 }
];

const kicks = [
  { name: "Kick 000 Original Sin", src: kick1 },
  { name: "Kick 001 Apollo", src: kick2 },
  { name: "Kick 002 Minimal", src: kick3 },
  { name: "Kick 003 Micro Dynamic", src: kick4 },
  { name: "Kick 004 Velocity", src: kick5 }
];

const claps = [
  { name: "clap_001", src: clap1 },
  { name: "clap_002", src: clap2 },
  { name: "clap_003", src: clap3 },
  { name: "clap_004", src: clap4 }
];

const percussion = [
  { name: "bongo_001c", src: bongo },
  { name: "can_003", src: can },
  { name: "cymb_001", src: cymbal },
  { name: "fingers_001", src: fingers },
  { name: "shaker_003", src: shaker },
  { name: "stick_001", src: stick },
  { name: "tabla_001a", src: tabla }
];

export { arps, kicks, claps, percussion };
