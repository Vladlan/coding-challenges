SELECT COMPANY.company_code, COMPANY.founder, 
COUNT(distinct Lead_Manager.lead_manager_code),
COUNT(distinct Senior_Manager.senior_manager_code),
COUNT(distinct Manager.manager_code),
COUNT(distinct Employee.employee_code)
FROM COMPANY, Lead_Manager, Senior_Manager, Manager, Employee
WHERE COMPANY.company_code=Lead_Manager.company_code 
AND Lead_Manager.lead_manager_code=Senior_Manager.lead_manager_code
AND Senior_Manager.senior_manager_code=Manager.senior_manager_code
AND Manager.manager_code=Employee.manager_code
GROUP BY COMPANY.company_code, COMPANY.founder
ORDER BY COMPANY.company_code ASC