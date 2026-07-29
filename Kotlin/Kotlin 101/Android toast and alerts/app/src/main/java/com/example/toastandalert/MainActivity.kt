package com.example.toastandalert

import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import com.google.android.material.snackbar.Snackbar
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {
    private lateinit var toast: Button
    private lateinit var snack: Button
    private lateinit var layout: ConstraintLayout

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)

        toast = findViewById(R.id.toast)
        snack=findViewById(R.id.sncakbar)
        layout=findViewById(R.id.main)
//        event
        toast.setOnClickListener {
            Toast.makeText(this, "You are gay!", Toast.LENGTH_SHORT).show()
        }
        snack.setOnClickListener {
            Snackbar.make(layout, "amar sorom kore", Snackbar.LENGTH_SHORT).setAction("Kaitta den") {

            }.show()
        }


        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }
    }
}