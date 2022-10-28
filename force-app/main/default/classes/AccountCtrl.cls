//method to be called from LWC
public with sharing class AccountCtrl {
    @AuraEnabled(cacheable = true)
    public static list<Account> getBiotechAccounts(){
        try {
            list<Account> accounts = [SELECT name, type, industry, annualrevenue from Account WHERE industry = 'Biotechnology' WITH SECURITY_ENFORCED LIMIT 4];
            //with security_enforced enforce field level security, with sharing enforce record level security
            return accounts;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(Cacheable=true)
    public static List<Account> getAccsByType(string type){
        return [SELECT Name, Type, Industry, AnnualRevenue from Account WHERE Type = :type WITH SECURITY_ENFORCED];       
    }  
    @AuraEnabled(Cacheable=true)
    public static List<Account> getAccountsByIndustry(string industry){
        return [SELECT Name, Type, Industry, AnnualRevenue from Account WHERE Type = :type WITH SECURITY_ENFORCED];       
    }
}
