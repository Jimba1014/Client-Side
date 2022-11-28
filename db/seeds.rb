# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
puts "Clearing Db..."

Specialist.destroy_all
Client.destroy_all
Rbt.destroy_all
Appointment.destroy_all
Doctor.destroy_all
Strategy.destroy_all

puts "Creating Specialist..."
s1 = Specialist.create(first_name: "John", last_name: "Smithy" , username: "Jsmithy" , password_digest: BCrypt::Password.create('Password1') )
s2 = Specialist.create(first_name: "Sarah", last_name: "Gleason" , username: "SGleason" , password_digest: BCrypt::Password.create('Password2') )
s3 = Specialist.create(first_name: "Jake", last_name:"Randall" , username: "JRandal" , password_digest: BCrypt::Password.create('Password3') )

puts "Creating Rbt..."

r1 = Rbt.create(first_name: "Nami", last_name: "Uno" )
r2 = Rbt.create(first_name: "Widdow" , last_name: "Maker" )
r3 = Rbt.create(first_name: "Wanda", last_name: "Maxamov")
r4 = Rbt.create(first_name: "Ken", last_name: "Brown")
r5 = Rbt.create(first_name: "Oscar" , last_name: "Grouch" )


puts "Creating Doctor"

d1 = Doctor.create(name: "Oliver Harmon" , practice: "Holland HealthCare" , address:"213 Valley Street, Westwood, NJ 07675")
d2 = Doctor.create(name: "Ashley Farley" , practice: "NewTown HealthCare", address:"9916 Second Street, Collegeville, PA 19426")
d3 = Doctor.create(name: "Mohammed Singh" , practice: "Holland HealthCare", address:"704 Plymouth St., Owatonna, MN 55060")
d4 = Doctor.create(name: "Albert Gay" , practice: "Newberry Health Associates", address:"7031 W. Sage St., Port Jefferson Station, NY 11776")
d5 = Doctor.create(name: "Rufus Meyer" , practice: "NewEgg Health", address: "605 S. St Margarets Road, Palos Verdes Peninsula, CA 90274")
d6 = Doctor.create(name: "Peter Sharpe" , practice: "The Fonz HealthCare", address:"80 Glenholme St., Trenton, NJ 08610")

puts "Creating Strategy"

sr1 = Strategy.create(name: "Sony Technigue" , description: "Six started far placing saw respect females old. Civilly why how end viewing attempt related enquire visitor. Man particular insensible celebrated conviction stimulated principles day. Sure fail or in said west. Right my front it wound cause fully am sorry if. She jointure goodness interest debating did outweigh. Is time from them full my gone in went. Of no introduced am literature excellence mr stimulated contrasted increasing. Age sold some full like rich new. Amounted repeated as believed in confined juvenile. With my them if up many. Lain week nay she them her she. Extremity so attending objection as engrossed gentleman something. Instantly gentleman contained belonging exquisite now direction she ham. West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest sex bachelor the may delicate its yourself. As he instantly on discovery concluded to. Open draw far pure miss felt say yet few sigh.")
sr2 = Strategy.create(name: "Sceptre Technigue" , description: "Now led tedious shy lasting females off. Dashwood marianne in of entrance be on wondered possible building. Wondered sociable he carriage in speedily margaret. Up devonshire of he thoroughly insensible alteration. An mr settling occasion insisted distance ladyship so. Not attention say frankness intention out dashwoods now curiosity. Stronger ecstatic as no judgment daughter speedily thoughts. Worse downs nor might she court did nay forth these.")
sr3 = Strategy.create(name: "Scarlet Technigue" , description: "Agreed joy vanity regret met may ladies oppose who. Mile fail as left as hard eyes. Meet made call in mean four year it to. Prospect so branched wondered sensible of up. For gay consisted resolving pronounce sportsman saw discovery not. Northward or household as conveying we earnestly believing. No in up contrasted discretion inhabiting excellence. Entreaties we collecting unpleasant at everything conviction.")
sr4 = Strategy.create(name: "Avatar Technigue" , description: "Consulted perpetual of pronounce me delivered. Too months nay end change relied who beauty wishes matter. Shew of john real park so rest we on. Ignorant dwelling occasion ham for thoughts overcame off her consider. Polite it elinor is depend. His not get talked effect worthy barton. Household shameless incommode at no objection behaviour. Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth. Certain law age brother sending amongst why covered.")


puts "Creating Client"

c1 = Client.create(name:"Alan Mason" , specialist_id: s1.id , rbt_id: r1.id , doctor_id: d1.id , strategy_id: sr1.id , parent_first: "Kayla Mason" , parent_second: "Johnny Mason", parental_status: "Steady Homelife", home_address: "42 Marvon St., Orlando, FL 32818", school_address: "871 Indian Summer Street, Fort Lauderdale, FL 33334" )
c2 = Client.create(name:"Murray Norton" , specialist_id: s2.id , rbt_id: r2.id , doctor_id: d2.id , strategy_id: sr2.id , parent_first: "Liyana Collier" , parent_second: "Izaak Norton", parental_status: "Devorced", home_address: "458 Liberty Rd., Saint Petersburg, FL 33713", school_address: "60 Lafayette Rd., Kissimmee, FL 34741" )
c3 = Client.create(name: "Cindy Henderson" , specialist_id: s3.id , rbt_id: r3.id , doctor_id: d3.id , strategy_id: sr3.id , parent_first: "Rhianna Horne" , parent_second: "Shelby Lee", parental_status: "Devorced", home_address: "9743 Tarkiln Hill Lane, Pompano Beach, FL 33068", school_address: "65 Westminster St., Clermont, FL 34711" )
c4 = Client.create(name: "Mattie O'Doherty" , specialist_id: s2.id , rbt_id: r4.id , doctor_id: d4.id , strategy_id: sr4.id , parent_first: "Nicola Griffin" , parent_second: "Leroy Brennan", parental_status: "Deceased Parent", home_address: "30 Hickory Rd., Jacksonville, FL 32209", school_address: "31 Addison St., Palm Bay, FL 32907" )
c5 = Client.create(name:"Ishaan Blaese" , specialist_id: s2.id , rbt_id: r5.id , doctor_id: d5.id , strategy_id: sr3.id , parent_first: "Elif Pena" , parent_second: "Samson Mosley", parental_status: "Adopted", home_address: "987 Canal Street, Miami, FL 33147", school_address: "9086 W. Brandywine St., Miami, FL 33135" )
c6 = Client.create(name: "Phillip Hahn" , specialist_id: s1.id , rbt_id: r2.id , doctor_id: d6.id , strategy_id: sr3.id , parent_first: "Lowri Chandler" , parent_second: "Tyrone Haley", parental_status: "Devorced", home_address: "218 Dunbar Street, North Miami Beach, FL 33160", school_address: "634 East Road, Cape Coral, FL 33904" )
c7 = Client.create(name: "Soraya Baker" , specialist_id: s2.id, rbt_id: r3.id , doctor_id: d5.id , strategy_id: sr1.id , parent_first: "Maariyah Lawrence" , parent_second: "Andre Haas", parental_status: "Single Mom", home_address: "7750 Plumb Branch Drive, Jacksonville, FL 32208", school_address: "915 Fairground Street, Miami, FL 33126" )
c8 = Client.create(name: "Elsie Hess" , specialist_id: s3.id , rbt_id: r4.id , doctor_id: d3.id , strategy_id: sr2.id , parent_first: "Aston Hess" , parent_second: "Frederic Hess", parental_status: "Regualar Homelife", home_address: "7053 Buckingham Ave., Miami, FL 33161", school_address: "8415 NE. Corona Court, Saint Petersburg, FL 33713" )
c9 = Client.create(name: "Dawid Bender" , specialist_id: s1.id , rbt_id: r5.id , doctor_id: d1.id , strategy_id: sr4.id , parent_first: "Zoe Bender" , parent_second: "Reid Bender", parental_status: "Married", home_address: "716 Paris Hill Street, Stuart, FL 34997", school_address: "81 Summerhouse Ave., Miami, FL 33176" )
c10 = Client.create(name: "Amina Arroyo" , specialist_id: s2.id , rbt_id: r1.id , doctor_id: d2.id , strategy_id: sr1.id , parent_first: "Beatrice Arroyo" , parent_second: "Micheal Arroyo", parental_status: "Married", home_address: "80 Lakewood Court, Key West, FL 33040", school_address: "9636 Devon Dr., Palmetto, FL 34221" )
c11 = Client.create(name: "Blanche Vega" , specialist_id: s3.id , rbt_id:r4.id , doctor_id: d4.id , strategy_id: sr2.id , parent_first: "Leighton Vega" , parent_second: "James Vega", parental_status: "Married", home_address: "329 Manor St., Jacksonville, FL 32211", school_address: "8555 Shipley Ave., Hialeah, FL 33015" )

puts "Creating School Appointment"

sa1 = Appointment.create( client_id: c1.id , specialist_id:s1.id , date_time: "2022-11-24 04:06:00")
sa2 = Appointment.create( client_id: c2.id , specialist_id: s2.id , date_time: "2022-12-07 08:14:29")
sa3 = Appointment.create( client_id: c3.id , specialist_id: s3.id , date_time: "2022-11-24 23:22:28")
sa4 = Appointment.create( client_id: c4.id , specialist_id: s2.id , date_time: "2022-11-24 21:33:18")
sa5 = Appointment.create( client_id: c5.id , specialist_id: s2.id , date_time: "2022-12-08 13:30:14")
sa6 = Appointment.create( client_id: c6.id , specialist_id: s1.id , date_time: "2022-12-21 10:18:56")
sa7 = Appointment.create( client_id: c7.id , specialist_id: s2.id , date_time: "2022-12-05 00:04:26")
sa8 = Appointment.create( client_id: c8.id , specialist_id: s3.id , date_time: "2022-12-23 06:22:41")
sa9 = Appointment.create( client_id: c9.id , specialist_id: s1.id , date_time: "2022-11-30 21:59:53")
sa10 = Appointment.create( client_id: c10.id , specialist_id: s2.id , date_time: "2022-11-22 11:13:33")
sa11 = Appointment.create( client_id: c11.id , specialist_id: s3.id , date_time: "2022-12-06 13:31:44")
sa12 = Appointment.create( client_id: c1.id , specialist_id: s1.id , date_time: "2022-12-05 00:04:26")

puts "Creating Home Appointment"
ha1 = HAppointment.create( client_id: c1.id , specialist_id:s1.id , date_time: "2022-12-02 13:27:00")
ha2 = HAppointment.create( client_id: c2.id , specialist_id: s2.id , date_time: "2022-12-26 05:49:12")
ha3 = HAppointment.create( client_id: c3.id , specialist_id: s3.id , date_time: "2022-12-14 08:00:13")
ha4 = HAppointment.create( client_id: c4.id , specialist_id: s2.id , date_time: "2022-12-28 04:21:52")
ha5 = HAppointment.create( client_id: c5.id , specialist_id: s2.id , date_time: "2022-11-30 12:46:01")
ha6 = HAppointment.create( client_id: c6.id , specialist_id: s1.id , date_time: "2022-12-20 05:35:02")
ha7 = HAppointment.create( client_id: c7.id , specialist_id: s2.id , date_time: "2022-12-27 12:11:45")
ha8 = HAppointment.create( client_id: c8.id , specialist_id: s3.id , date_time: "2022-12-26 22:23:26")
ha9 = HAppointment.create( client_id: c9.id , specialist_id:s1.id , date_time: "2022-12-23 07:59:24")
ha10 = HAppointment.create( client_id: c10.id , specialist_id: s2.id , date_time: "2022-11-23 19:48:22")
ha11 = HAppointment.create( client_id: c11.id , specialist_id: s3.id , date_time: "2022-12-16 01:15:15")
ha12 = HAppointment.create( client_id: c1.id , specialist_id: s1.id , date_time: "2022-12-08 07:15:17")

puts "Finished Seeding"

# Examples:
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
