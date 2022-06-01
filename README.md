### EXPENSE USE CASE

- Create expense
- Delete expense (dont delete from database)
- Update expense
- List expenses
- Save as a drafts
- Count of expenses
- Remove many expenses



## Entities Diagram

`<img src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=FFFFFF&edit=_blank&layers=1&nav=1&title=seganix.drawio#R7Zrdb5swEMD%2FGh478ZGQ5LEhaTep26ql3bSnygUHrBmbGack%2B%2Bt3xnY%2BSlizaQ19IEKKOR%2F%2BuPv5sC9xgihfXwtUZB95gqnju8naCWaO73sD33fU5SYbLRmNQi1IBUmM0k6wIL%2BwEbpGuiIJLg8UJedUkuJQGHPGcCwPZEgIXh2qLTk97LVAKW4IFjGiTek3ksjMSD3X3VW8xyTNTNfjoal4RPGPVPAVM%2F0xzrCuyZFtxqiWGUp4tScK5k4QCc6lLuXrCFNlVmsx%2FdxVS%2B12yAIzecoDo%2FEk9LzhZOmGeDLG4wtvpJt4QnRl7DBfF5iVZgal3Fj7lBXJKYKpBdNM5hSEHhSXnMmFUVL3iJKUQTmGEWEBgicsJAErX5oKyQuQxhmhyQ3a8JUadynBhPZumnFBfkGzyPYB1UIaYPzwQGOhngSxC1KBS9C5tcbwtqIbVEqjE3NKUVGSx%2B2AcyRSwqZcSp4bJTvTK0JpxCkXtQGCZf1RrSpf48RqW5%2Fq9nMSmzJFj5hOt3DYlmo81KQE%2F7ElrTblXndGSVn3CuWEqjX1FYsEMWSNru3h%2BU0GDBbK8ni9JzJMXGOeYyk2oGJrLeNm6Vqyq711EBpZtrcEfPscMmsv3Ta9gxAKhsMTmdyOf8fkhV734Gzo%2BbLmUhCWNhiF%2BcpDPrWZn5u1aWnLLcVL2UptWaAYur2pdWaDneSLsYkSVRmReAFyNaYKYiXIOLS3pDUlGUkSzGqKJJJIg6hwKThhsrbjcAoXWDZy3w2dIcwrgntvdw%2BXUhcy4gzmh0jteAyUV1iRPm0i0b7wX4bEQOGHJ0IRvgYTQYMJx5%2Bqtw2SWCMxU6UeiPMBMfS7BGJ4NEiUq0LZoQ8SHTExGnfJRNgSJD5InJeaCccPqdQ%2BYQdYhD9XahemPXNRateoJwqBa2tZBSil5hs2BRNdolpypZvVCmYjpTqvvTXrSTwjiZ476BLFQQuKjNv3VR%2Bdzs9EcOrG9j8w8XB%2F%2F6Gao6fN5ySuZplHQwZjbu5tNRdyUxguLqPo8%2F2nu4e777fzno4%2F0dFw%2FEnAtNMx7HKH602OkPHM%2B5Q8P36fdIp8wfU5OIzina%2FvFAqzC6%2FBQ9DkITji5%2Frce8tLIglX7Qut%2B8z%2F3QSA8Yl7Vm%2F8SgHAb3h5m2%2BptykNn%2Fdpl7ecdnkhBP057eKP%2Fi3t4oWDV6Kzeco2mZcYF%2F2h6n%2B9mNoDw5tIvhwdXtt%2BNsFlLEihQ33PR1d8nDMXc3R4x9MxKIcQbAIHW%2BWP8GrqwTgrGOdMyBwdXltOphDEZlh6Mrog46wJkqPja%2F72aM7CYEz60APSNSCdZ0vG%2FZH4LI4%2BNfHx94diuN39u6Gu2%2Fv3SDD%2FDQ%3D%3D" alt="MarineGEO circle logo" style="height: 100px; width:100px;"/>`

https://viewer.diagrams.net/?tags={}&highlight=FFFFFF&edit=_blank&layers=1&nav=1&title=seganix.drawio#R7Zrdb5swEMD%2FGh478ZGQ5LEhaTep26ql3bSnygUHrBmbGack%2B%2Bt3xnY%2BSlizaQ19IEKKOR%2F%2BuPv5sC9xgihfXwtUZB95gqnju8naCWaO73sD33fU5SYbLRmNQi1IBUmM0k6wIL%2BwEbpGuiIJLg8UJedUkuJQGHPGcCwPZEgIXh2qLTk97LVAKW4IFjGiTek3ksjMSD3X3VW8xyTNTNfjoal4RPGPVPAVM%2F0xzrCuyZFtxqiWGUp4tScK5k4QCc6lLuXrCFNlVmsx%2FdxVS%2B12yAIzecoDo%2FEk9LzhZOmGeDLG4wtvpJt4QnRl7DBfF5iVZgal3Fj7lBXJKYKpBdNM5hSEHhSXnMmFUVL3iJKUQTmGEWEBgicsJAErX5oKyQuQxhmhyQ3a8JUadynBhPZumnFBfkGzyPYB1UIaYPzwQGOhngSxC1KBS9C5tcbwtqIbVEqjE3NKUVGSx%2B2AcyRSwqZcSp4bJTvTK0JpxCkXtQGCZf1RrSpf48RqW5%2Fq9nMSmzJFj5hOt3DYlmo81KQE%2F7ElrTblXndGSVn3CuWEqjX1FYsEMWSNru3h%2BU0GDBbK8ni9JzJMXGOeYyk2oGJrLeNm6Vqyq711EBpZtrcEfPscMmsv3Ta9gxAKhsMTmdyOf8fkhV734Gzo%2BbLmUhCWNhiF%2BcpDPrWZn5u1aWnLLcVL2UptWaAYur2pdWaDneSLsYkSVRmReAFyNaYKYiXIOLS3pDUlGUkSzGqKJJJIg6hwKThhsrbjcAoXWDZy3w2dIcwrgntvdw%2BXUhcy4gzmh0jteAyUV1iRPm0i0b7wX4bEQOGHJ0IRvgYTQYMJx5%2Bqtw2SWCMxU6UeiPMBMfS7BGJ4NEiUq0LZoQ8SHTExGnfJRNgSJD5InJeaCccPqdQ%2BYQdYhD9XahemPXNRateoJwqBa2tZBSil5hs2BRNdolpypZvVCmYjpTqvvTXrSTwjiZ476BLFQQuKjNv3VR%2Bdzs9EcOrG9j8w8XB%2F%2F6Gao6fN5ySuZplHQwZjbu5tNRdyUxguLqPo8%2F2nu4e777fzno4%2F0dFw%2FEnAtNMx7HKH602OkPHM%2B5Q8P36fdIp8wfU5OIzina%2FvFAqzC6%2FBQ9DkITji5%2Frce8tLIglX7Qut%2B8z%2F3QSA8Yl7Vm%2F8SgHAb3h5m2%2BptykNn%2Fdpl7ecdnkhBP057eKP%2Fi3t4oWDV6Kzeco2mZcYF%2F2h6n%2B9mNoDw5tIvhwdXtt%2BNsFlLEihQ33PR1d8nDMXc3R4x9MxKIcQbAIHW%2BWP8GrqwTgrGOdMyBwdXltOphDEZlh6Mrog46wJkqPja%2F72aM7CYEz60APSNSCdZ0vG%2FZH4LI4%2BNfHx94diuN39u6Gu2%2Fv3SDD%2FDQ%3D%3D

