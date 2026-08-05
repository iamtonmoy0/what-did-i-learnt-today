package com.example.toastandalert

import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import com.google.android.material.snackbar.Snackbar
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {
    private lateinit var toast: Button
    private lateinit var snack: Button
    private lateinit var layout: ConstraintLayout
    private lateinit var dialouge: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)

        toast = findViewById(R.id.toast)
        snack=findViewById(R.id.sncakbar)
        layout=findViewById(R.id.main)
        dialouge=findViewById(R.id.dialougebar)

//        event
        toast.setOnClickListener {
            Toast.makeText(this, "You are gay!", Toast.LENGTH_SHORT).show()
        }
        snack.setOnClickListener {
            Snackbar.make(layout, "amar sorom kore", Snackbar.LENGTH_SHORT).setAction("Kaitta den") {

            }.show()
        }
        dialouge.setOnClickListener {
            showAlertDial()
        }

        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }
    }

    private fun showAlertDial() {
        AlertDialog.Builder(this)
            .setTitle("Warning ! a gay person detected")
            .setMessage("Are you sure you want to exit or die?")
            .setIcon(R.drawable.warning_24px)
            .setCancelable(false)
            .setNegativeButton("no") { dialog, _ ->
                Toast.makeText(this, " go to hell!", Toast.LENGTH_SHORT).show()
                dialog.cancel()
            }
            .setPositiveButton("yes") { _, _ ->
                Toast.makeText(this, "Fuck you", Toast.LENGTH_SHORT).show()
            }
            .show()
    }
}