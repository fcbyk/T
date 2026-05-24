### demo66

```
JDBC
├── java.sql.Connection
│   ├── java.sql.DriverManager
│   └── javax.sql.DataSource
│       ├── com.mysql.cj.jdbc.MysqlDataSource        (MySQL)
│       └── org.postgresql.ds.PGSimpleDataSource     (PostgreSQL)
├── java.sql.Statement
│   ├── java.sql.PreparedStatement
│   ├── java.sql.CallableStatement
│   └── com.mysql.cj.jdbc.StatementImpl            (MySQL)
├── java.sql.ResultSet
│   └── com.mysql.cj.jdbc.result.ResultSetImpl      (MySQL)
├── java.sql.Driver
│   └── com.mysql.cj.jdbc.Driver                    (MySQL)
├── java.sql.SQLException
└── javax.sql.ConnectionPoolDataSource
    └── com.mysql.cj.jdbc.MysqlConnectionPoolDataSource (MySQL)
```