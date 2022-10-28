public with sharing class OppController {
 
    
        @AuraEnabled(cacheable = false)//eskileri getirmesini istemedigimiz icin false yazdik. bellekte tutmak istiyorsak tru olcak
        public static List<Opportunity> getOpp(String stage){
            return[SELECT Name, Type, Amount, CloseDate, StageName
                                    FROM Opportunity
                                    WHERE StageName =:stage];
                                    //stage name sadece stage olanlari getirmek icin bu sekilde yazdik
    }
}

