package Model;

import java.util.Scanner;

public class Ans4 {
    public static void main(String[] args) {
        System.out.println("eneter a number");
        Scanner sc=new Scanner(System.in);
        int m=sc.nextInt();
        factorialNumber(m);
    }

    private static void factorialNumber(int m) {
        int fact=1;
        for(int i=1;i<=m;i++){
            fact=fact*i;
        }
        System.out.println(fact);
    }
}
