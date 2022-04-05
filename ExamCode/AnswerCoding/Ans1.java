package Model;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;

public class Ans1 {
    public static void main(String[] args) {
        try{
        File file=new File("Adi.txt");
        File file2=new File("Welcome.txt");
        FileReader fr=new FileReader(file); 
       boolean read=true;
       String sr=" ";
       while(read==true){
          int m= fr.read();
          if(m==-1){
              read=false;
              break;
          }
          char ch=(char)m;
          sr=sr+ch;
       }
       System.out.println(sr);
       fr.close();
       FileWriter write=new FileWriter(file2);
       write.append(sr);
       write.close();
    }
      catch(Exception e){
        e.printStackTrace();
      }
    }
}
