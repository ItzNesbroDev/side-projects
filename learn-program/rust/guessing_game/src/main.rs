use std::io;

fn main() {
    println!("Gusss The Number");
    println!("Please input your guess number. ");
    let mut guess = String::new();

    io::stdin().read_line(&mut guess).expect("Failed to read line");

    println!("You guessed: {guess}");
}
