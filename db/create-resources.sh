echo "saving model/controller code to git stash"
git add .
git stash
echo "removing resources"
rails d resource Client
rails d resource Specialist
rails d resource Rbt
rails d resource Appointment
rails d resource Doctor
rails d resource Strategy
rails d resource HAppointment
echo "creating resources"
rails g resource Specialist first_name last_name username password_digest
rails g resource Rbt first_name last_name
rails g resource Strategy name description:text
rails g resource Doctor name practice address
rails g resource Client name specialist:belongs_to rbt:belongs_to doctor:belongs_to strategy:belongs_to parent_first parent_second parental_status home_address school_address
rails g resource Appointment client:belongs_to specialist:belongs_to date_time:datetime
rails g resource HAppointment client:belongs_to specialist:belongs_to date_time:datetime
echo "done creating resouces,  use 'git stash pop' to recover stashed changes"