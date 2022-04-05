package Model;

import java.util.Scanner;

public class Ans3 {
    static final int ASCII_SIZE = 256;
 private static void findMaxreccuringchar(String s) {
        int count[] = new int[ASCII_SIZE];
        int len = s.length();
        for (int i=0; i<len; i++)
            count[s.charAt(i)]++;
        int max = -1;  
        char result = ' ';  
        for (int i = 0; i < len; i++) {
            if (max < count[s.charAt(i)]) {
                max = count[s.charAt(i)];
                result = s.charAt(i);
            }
        }
    System.out.println(result);
}    public static void main(String[] args) {
        System.out.println("eneter a string");
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();
        findMaxreccuringchar(s);
    }
   
}
